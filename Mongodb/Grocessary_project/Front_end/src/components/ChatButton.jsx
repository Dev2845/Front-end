import React, { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! Welcome to SmartMall. I'm your digital mall assistant. How can I help you today?", isBot: true }
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = { id: Date.now(), text: inputVal, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");

    // Simulate bot reply
    setTimeout(() => {
      let replyText = "That's interesting! You can check our category sections or contact our support team at support@smartmall.com.";
      
      const query = inputVal.toLowerCase();
      if (query.includes("discount") || query.includes("offer") || query.includes("coupon")) {
        replyText = "Check out our 'Offers' page in the top menu to grab active coupon codes like SAVE20 and claim limited-time mega deals!";
      } else if (query.includes("delivery") || query.includes("ship")) {
        replyText = "We offer same-day delivery on Groceries and express 2-day shipping on Electronics & Fashion products.";
      } else if (query.includes("return") || query.includes("refund")) {
        replyText = "SmartMall supports a hassle-free 30-day return policy. You can trigger returns from your Profile settings page.";
      } else if (query.includes("grocery") || query.includes("apple") || query.includes("milk")) {
        replyText = "Our Grocery page features fresh organic apples, baby spinach, dairy milk, whole wheat bakery, and local snacks. Click 'Grocery' to explore!";
      } else if (query.includes("phone") || query.includes("laptop") || query.includes("ps5")) {
        replyText = "Our Electronics section lists iPhone 15 Pro, Samsung S24, Sony ANC headphones, and PlayStation 5. Head over to the 'Electronics' page to check them out.";
      }

      const botMsg = { id: Date.now() + 1, text: replyText, isBot: true };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="chat-widget">
      {/* Floating bubble button */}
      <button className="chat-bubble" onClick={() => setIsOpen(!isOpen)} aria-label="Open Customer Chat Support">
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Windows panel */}
      {isOpen && (
        <div className="chat-window glass-card animate-fade">
          <div className="chat-header">
            <div>
              <h3 style={{ fontSize: "14px", fontWeight: "700" }}>Mall Concierge AI</h3>
              <span style={{ fontSize: "10px", opacity: 0.8 }}>Online • Instant Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ color: "#ffffff", cursor: "pointer" }}><X size={18} /></button>
          </div>

          <div className="chat-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-msg ${msg.isBot ? "chat-msg-bot" : "chat-msg-user"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="chat-footer">
            <input
              type="text"
              placeholder="Ask me about offers, delivery, returns..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="coupon-input"
              style={{ fontSize: "12px", padding: "8px 12px" }}
            />
            <button type="submit" className="add-cart-btn-circle" style={{ width: "32px", height: "32px", flexShrink: 0 }}>
              <Send size={12} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
