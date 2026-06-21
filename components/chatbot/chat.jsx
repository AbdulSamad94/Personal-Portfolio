"use client";
import React, { useState, useEffect, useRef } from "react";
import { Bot, X, Send, MessageCircle } from "lucide-react";

const parseMessageText = (text) => {
  if (!text) return text;

  let safe = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  safe = safe.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  safe = safe.replace(/^• (.+)$/gm, "<li>$1</li>");
  safe = safe.replace(
    /^\*\*(.*?):\*\*(.*)$/gm,
    '<h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-1 mt-2">$1:</h4><p class="mb-2">$2</p>'
  );
  safe = safe.replace(
    /(<li>.*<\/li>\s*)+/gs,
    '<ul class="list-disc list-inside mb-3 space-y-1 ml-2">$&</ul>'
  );
  safe = safe.replace(
    /(https?:\/\/[^\s&lt;&quot;&#039;]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-orange-500 hover:text-orange-600 underline break-all">$1</a>'
  );
  safe = safe.replace(/\n\n/g, "<br><br>");
  safe = safe.replace(/\n/g, "<br>");
  return safe;
};

const SUGGESTIONS = [
  "What projects have you built?",
  "What's your tech stack?",
  "Are you available to hire?",
  "How can I contact you?",
];

const DEFAULT_MESSAGES = [
  {
    id: 1,
    text: "Hey! I'm SamadAI — Abdul Samad's portfolio assistant. Ask me about his projects, skills, or how to work with him.",
    isBot: true,
    loading: false,
    timestamp: null,
  },
];

const formatTime = (date) => {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const LoadingAnimation = () => (
  <div className="flex items-center gap-1 py-0.5">
    {[0, 200, 400].map((delay) => (
      <div
        key={delay}
        className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
        style={{ animationDelay: `${delay}ms`, animationDuration: "1.2s" }}
      />
    ))}
  </div>
);

const MessageBubble = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const parsedText = message.isBot ? parseMessageText(message.text) : message.text;

  return (
    <div
      className={`flex ${message.isBot ? "justify-start" : "justify-end"} mb-3 transform transition-all duration-300 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      {message.isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mr-2 mt-auto mb-5 shrink-0 shadow-sm">
          <Bot className="w-3.5 h-3.5 text-white" />
        </div>
      )}
      <div className="flex flex-col max-w-[80%]">
        <div
          className={`px-4 py-2.5 shadow-sm ${
            message.isBot
              ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl rounded-tl-sm border border-gray-100 dark:border-gray-700"
              : "bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl rounded-tr-sm"
          }`}
        >
          {message.loading ? (
            <LoadingAnimation />
          ) : message.isBot ? (
            <div
              className="text-sm leading-relaxed formatted-message"
              dangerouslySetInnerHTML={{ __html: parsedText }}
            />
          ) : (
            <p className="text-sm leading-relaxed">{message.text}</p>
          )}
        </div>
        {!message.loading && message.timestamp && (
          <span
            className={`text-[10px] text-gray-400 mt-1 ${
              message.isBot ? "text-left pl-1" : "text-right pr-1"
            }`}
          >
            {formatTime(message.timestamp)}
          </span>
        )}
      </div>
    </div>
  );
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(DEFAULT_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userMessageText = text.trim();
    if (!userMessageText || loading) return;

    setShowSuggestions(false);
    setInputValue("");

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: userMessageText,
        isBot: false,
        loading: false,
        timestamp: new Date(),
      },
    ]);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        text: "",
        isBot: true,
        loading: true,
        timestamp: null,
      },
    ]);

    setIsLoading(true);

    try {
      const requestBody = { message: userMessageText };
      if (sessionId) requestBody.session_id = sessionId;

      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to get response.");
      }

      const data = await res.json();

      if (data.session_id) {
        setSessionId(data.session_id);
      }

      setMessages((prev) => {
        const filtered = prev.filter((m) => !m.loading);
        return [
          ...filtered,
          {
            id: Date.now() + 2,
            text: data.response,
            isBot: true,
            loading: false,
            timestamp: new Date(),
          },
        ];
      });
    } catch {
      setMessages((prev) => {
        const filtered = prev.filter((m) => !m.loading);
        return [
          ...filtered,
          {
            id: Date.now() + 2,
            text: "Sorry, something went wrong. Please try again.",
            isBot: true,
            loading: false,
            timestamp: new Date(),
          },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => sendMessage(inputValue);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !loading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      {/* Chat Window */}
      <div
        className={`absolute bottom-[72px] right-0 w-[calc(100vw-2.5rem)] sm:w-[380px] h-[520px] max-h-[80dvh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden transform transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-none mb-0.5">
                SamadAI
              </p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <p className="text-white/80 text-[11px]">Portfolio Assistant</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center transition-colors shrink-0"
            aria-label="Close chat"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 space-y-1 no-scrollbar">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {/* Suggestion chips */}
          {showSuggestions && !loading && (
            <div className="pt-1">
              <p className="text-[10px] text-gray-400 mb-2 pl-9">
                Quick questions:
              </p>
              <div className="flex flex-row overflow-x-auto gap-2 pl-9 pb-1 no-scrollbar">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="shrink-0 text-left text-xs text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30 rounded-full px-3 py-1.5 hover:bg-orange-100 dark:hover:bg-orange-900/40 active:scale-95 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="shrink-0 p-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 text-sm px-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50 transition-all"
            />
            <button
              onClick={handleSendMessage}
              disabled={loading || !inputValue.trim()}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white hover:from-orange-600 hover:to-orange-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 shadow-md shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800 flex items-center justify-center ${
          isOpen ? "rotate-90" : ""
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white animate-pulse" />
          </div>
        )}
      </button>
    </div>
  );
};

export default Chat;
