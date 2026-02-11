import React, { useState, useRef, useEffect } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Satyaprakash's assistant. Ask me anything about him, his skills, projects, or experience!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const messagesEndRef = useRef(null);
  const chatbotRef = useRef(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Hide chatbot when reaching contact section
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector('[data-section="contact"]');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 30 Rule-Based Response Logic
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hey there! 👋 Welcome to Satyaprakash's portfolio. How can I help you today?";
    } 
    else if (input.includes('who are you') || input.includes('who is satya')) {
      return "I'm Satyaprakash Rout, a BTech CSE student passionate about full-stack development and building scalable web applications. Nice to meet you!";
    } 
    else if (input.includes('name')) {
      return "My name is Satyaprakash Rout. You can call me Satya for short!";
    } 
    else if (input.includes('education') || input.includes('studying') || input.includes('college')) {
      return "I'm pursuing a Bachelor of Technology (BTech) in Computer Science and Engineering (CSE). Currently focused on practical development skills!";
    } 
    else if (input.includes('skills') || input.includes('expertise')) {
      return "My key skills include: React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, Git, REST APIs, and responsive web design. I'm always learning new technologies!";
    } 
    else if (input.includes('projects') || input.includes('portfolio')) {
      return "I've completed 5 amazing projects! They showcase my abilities in MERN stack development, UI/UX design, and problem-solving. Check them out in the Featured Cards section!";
    } 
    else if (input.includes('mern') || input.includes('tech stack')) {
      return "I specialize in the MERN stack - MongoDB, Express.js, React.js, and Node.js. This combination allows me to build full-stack applications from frontend to backend!";
    } 
    else if (input.includes('experience') || input.includes('work')) {
      return "I have hands-on experience building multiple full-stack projects. While I'm still a student, I've developed real-world applications that solve actual problems!";
    } 
    else if (input.includes('frontend') || input.includes('react')) {
      return "I love frontend development! React is my go-to framework for building interactive, component-based user interfaces. I focus on clean code and great user experiences!";
    } 
    else if (input.includes('backend') || input.includes('node') || input.includes('express')) {
      return "For backend development, I use Node.js with Express.js. I build RESTful APIs, handle databases with MongoDB, and ensure scalable server architecture!";
    } 
    else if (input.includes('database') || input.includes('mongodb')) {
      return "I work with MongoDB for database management. It's perfect for flexible, document-based data storage in JavaScript projects!";
    } 
    else if (input.includes('contact') || input.includes('reach') || input.includes('email') || input.includes('phone')) {
      return "You can reach out to me through the Contact section on this portfolio. I'd love to hear from you!";
    } 
    else if (input.includes('github') || input.includes('repository')) {
      return "You can find my GitHub repositories and code samples on the portfolio. Check them out to see my actual project implementations!";
    } 
    else if (input.includes('how can i') || input.includes('help')) {
      return "You can ask me about Satyaprakash's background, skills, projects, tech stack, experience, or how to contact him. What interests you most?";
    } 
    else if (input.includes('best project') || input.includes('favorite project')) {
      return "All my projects are special, but I'm particularly proud of the full-stack applications I've built chat app (link - https://chat-app-hazel-ten.vercel.app/login ) using the MERN stack. They really showcase my growth!";
    } 
    else if (input.includes('javascript')) {
      return "JavaScript is my primary programming language! I use it for both frontend (React) and backend (Node.js) development, making it very versatile!";
    } 
    else if (input.includes('responsive') || input.includes('design') || input.includes('css')) {
      return "I create responsive designs that work beautifully on all devices. CSS and modern design principles are essential to my frontend work!";
    } 
    else if (input.includes('api') || input.includes('rest')) {
      return "I design and build RESTful APIs using Express.js. They follow best practices for HTTP methods, status codes, and proper data handling!";
    } 
    else if (input.includes('what can you do') || input.includes('capabilities')) {
      return "I can answer questions about Satyaprakash's background, skills, projects, experience, and how to get in touch. Feel free to ask me anything related to the portfolio!";
    } 
    else if (input.includes('learning') || input.includes('future') || input.includes('plans')) {
      return "I'm constantly learning new technologies and best practices in web development. Always looking to improve and take on new challenges!";
    } 
    else if (input.includes('thanks') || input.includes('thankyou') || input.includes('awesome')) {
      return "You're welcome! Happy to help! If you have more questions, just ask. 😊";
    } 
    else if (input.includes('bye') || input.includes('goodbye') || input.includes('see you')) {
      return "Thanks for visiting! Feel free to reach out through the contact section. Goodbye! 👋";
    } 
    else if (input.includes('git') || input.includes('version control')) {
      return "I use Git for version control and GitHub for repository management. Good version control practices are crucial for professional development!";
    } 
    else if (input.includes('responsive design')) {
      return "I design with mobile-first approach, ensuring websites look perfect on phones, tablets, and desktops using modern CSS techniques!";
    } 
    else if (input.includes('how long') || input.includes('experience level')) {
      return "I've built multiple projects and have solid hands-on experience in full-stack development. I'm a dedicated learner who continuously improves!";
    } 
    else if (input.includes('tools') || input.includes('software')) {
      return "I use VS Code, Git, MongoDB Compass, Postman for API testing, and various npm packages. Always open to learning new development tools!";
    } 
    else if (input.includes('why developer') || input.includes('motivation')) {
      return "I'm passionate about solving problems through code and creating products that make a real impact. Web development lets me bring ideas to life!";
    } 
    else if (input.includes('hire') || input.includes('job') || input.includes('freelance')) {
      return "Thanks for the interest! Please check the Contact section to reach out with opportunities. I'm always open to exciting projects!";
    }
    else {
      return "That's an interesting question! 🤔 I'm here to help with questions about Satyaprakash, his skills, projects, and experience. Try asking about his MERN stack expertise!";
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const userInput = inputValue.trim();
    if (!userInput) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: userInput,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate slight delay for natural feel
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <>
     {showPopup && !isOpen && (
        <div className="fixed bottom-24 right-6 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm shadow-lg animate-bounce">
          click me..
        </div>
      )}

    <div className="chatbot-container" ref={chatbotRef}>
      {/* Chat Button */}
      {!isOpen && (
        <button
          className="chatbot-button"
          onClick={() => {
            setIsOpen(true);
            setShowPopup(true);
          }}
          aria-label="Open chat"
          title="Chat with me!"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}

      
      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <h3>Chat Assistant</h3>
            <button
              className="close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="chatbot-messages">
            {messages.map(message => (
              <div
                key={message.id}
                className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}
              >
                <div className="message-content">{message.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot-message">
                <div className="message-content">
                  <span className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={sendMessage} className="chatbot-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Satyaprakash..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="send-button"
              aria-label="Send message"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
    </>
  );
};

export default Chatbot;
