// Chatbot.js
import React, { useState, useEffect, useRef } from "react";
import { CButton, CCard, CCardBody, CFormInput } from "@coreui/react";
import { FiSend } from "react-icons/fi";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };

    // Simple bot reply
    let botReply = "I'm here to assist you!";

    // About section
    if (input.toLowerCase().includes("about")) {
      botReply =
        "I'm a passionate web developer skilled in React, Node.js, and MongoDB. I love building user-friendly and responsive applications.";
    }

    // Skills section
    else if (input.toLowerCase().includes("skills")) {
      botReply =
        "My skills include HTML, CSS, JavaScript, React, Tailwind CSS, Core UI, MUI, Node.js, Express, and MongoDB.";
    }

    // Projects section
    else if (input.toLowerCase().includes("project")) {
      botReply =
        "I have built projects like an E-commerce app, a Portfolio website, and an EdTech platform using MERN Stack.";
    }

    // Education section
    else if (input.toLowerCase().includes("education")) {
      botReply =
        "I have completed my BCA in 2022 and also earned certifications in MERN Stack Development.";
    }

    // Experience (if you want to include internship/job)
    else if (input.toLowerCase().includes("experience")) {
      botReply =
        "I worked as a Junior Developer for 3 months at SG Green Logistics Pvt Ltd, where I contributed to frontend development.";
    }

    // Contact section
    else if (input.toLowerCase().includes("contact")) {
      botReply =
        "You can reach me through the Contact form on this portfolio or via my email.";
    }

    // Hobbies / Interests
    else if (
      input.toLowerCase().includes("hobbies") ||
      input.toLowerCase().includes("interests")
    ) {
      botReply =
        "Apart from coding, I enjoy learning new technologies, problem-solving, and exploring web development trends.";
    }

    // Default response
    else {
      botReply =
        "I'm here to assist you! Try asking about my skills, projects, education, or contact details.";
    }

    setMessages((prev) => [
      ...prev,
      userMsg,
      { text: botReply, sender: "bot" },
    ]);
    setInput("");
  };

  // Close chat if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 999 }}
    >
      {/* Toggle Button */}
      {!isOpen && (
        <CButton color="primary" shape="rounded-pill" onClick={toggleChat}>
          💬 Chat
        </CButton>
      )}

      {/* Chat Window */}
      {isOpen && (
        <CCard
          ref={chatRef}
          style={{
            width: "300px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CCardBody
            className="d-flex flex-column"
            style={{ flex: 1, overflowY: "auto" }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "5px 0",
                }}
              >
                <span
                  style={{
                    background: msg.sender === "user" ? "#0d6efd" : "#e9ecef",
                    color: msg.sender === "user" ? "white" : "black",
                    padding: "8px 12px",
                    borderRadius: "15px",
                    display: "inline-block",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </CCardBody>

          {/* Input + Send Button */}
          <div className="d-flex p-2">
            <CFormInput
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <CButton color="success" onClick={handleSend} className="ms-2">
              <FiSend size={20} color="white"/>
            </CButton>
          </div>

          {/* Close Button */}
          <CButton
            color="danger"
            variant="outline"
            onClick={toggleChat}
            className="m-2"
          >
            Close
          </CButton>
        </CCard>
      )}
    </div>
  );
};

export default Chatbot;
