import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const message = body.message;
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const pythonBackendUrl = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;
    const backendEndpoint = `${pythonBackendUrl}/chat`;

    const backendResponse = await fetch(backendEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, session_id: body.session_id || null }),
      signal: AbortSignal.timeout(30000),
    });

    if (!backendResponse.ok) {
      let errorData;
      try {
        errorData = await backendResponse.json();
      } catch {
        errorData = { error: `Backend returned status ${backendResponse.status}` };
      }
      return NextResponse.json(
        { error: errorData.error || "Failed to get response from AI agent" },
        { status: backendResponse.status }
      );
    }

    const data = await backendResponse.json();

    return NextResponse.json(
      { response: data.response, session_id: data.session_id },
      { status: 200 }
    );
  } catch (error) {
    if (error.name === "AbortError") {
      return NextResponse.json(
        { error: "Request timeout - backend took too long to respond" },
        { status: 408 }
      );
    }

    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}
