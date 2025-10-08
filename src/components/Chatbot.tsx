import { useState, useEffect } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/reducers";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello 👋 How can I help you today?" },
    ]);
    const name = useSelector((state: RootState) => state?.user?.userDetail?.name);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (name) {
            setShowWelcome(true);
        }
    }, [name]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowWelcome(false);
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("https://YOUR_API_URL/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();

            const botMsg = {
                sender: "bot",
                text: data.reply || "Sorry, I didn’t get that.",
            };
            setMessages((prev) => [...prev, botMsg]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Error connecting to server 😔" },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="chatbot-button" onClick={toggleChat}>
                {isOpen ? <CloseIcon /> : <ChatBubbleIcon />}

                {showWelcome && !isOpen && (
                    <div className="chatbot-welcome">
                        <p>
                            Hi {name?.split(" ")[0] || "there"} 👋 <br />
                            Need any help? Just click me!
                        </p>
                    </div>
                )}
            </div>

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <span>Chat Assistant</span>
                        <CloseIcon className="close-icon" onClick={toggleChat} />
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && <div className="typing">Typing...</div>}
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={input}
                            placeholder="Type a message..."
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button onClick={sendMessage}>
                            <SendIcon/>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
