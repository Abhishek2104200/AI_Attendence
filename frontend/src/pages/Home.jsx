import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaInfoCircle, FaRobot, FaCamera } from "react-icons/fa"; // Import necessary icons

const Home = () => {
    const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 100 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!dragging) return;
            setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
        };

        const handleMouseUp = () => setDragging(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging, offset]);

    const handleMouseDown = (e) => {
        setDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const openChatbot = () => {
        alert("Chatbot Coming Soon! 🤖");
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={headingStyle}>Welcome To VITAS</h1>
                <p style={paragraphStyle}>
                   VITAS is a Secure & automated attendance tracking using AI-powered facial recognition.
                </p>
                
                {/* Button Container for Admin Login & Attendance Recorder */}
                <div style={buttonContainerStyle}>
                    {/* Admin Login Button with User Icon */}
                    <Link to="/login">
                        <button style={buttonStyle}>
                            <FaUser size={20} /> Admin Login
                        </button>
                    </Link>

                    {/* Attendance Recorder Button with Camera Icon */}
                    <Link to="/attendance">
                        <button style={buttonStyle}>
                            <FaCamera size={20} /> Attendance Recorder
                        </button>
                    </Link>
                </div>

                {/* Info Icon for Additional Details */}
                <p style={infoStyle}>
                    <FaInfoCircle size={18} /> Contact us for more information
                </p>
            </div>

            {/* Chatbot Assistant - Draggable */}
            <div
                style={{
                    ...chatbotStyle,
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    cursor: dragging ? "grabbing" : "grab",
                }}
                onMouseDown={handleMouseDown}
                onClick={openChatbot}
            >
                <FaRobot size={40} />
            </div>
        </div>
    );
};

// Styling Objects
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(to right, #4c6ef5, #3f3cbb)',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px',
    position: 'relative',
};

const cardStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '40px 20px',
    width: '100%',
    maxWidth: '480px',
    margin: '0 auto',
};

const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#333',
};

const paragraphStyle = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px',
};

const buttonContainerStyle = {
    display: 'flex',
    gap: '10px', // Adds space between buttons
    flexWrap: 'wrap', // Ensures responsiveness
    justifyContent: 'center',
};

const buttonStyle = {
    backgroundColor: '#4c6ef5',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '10px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    border: 'none',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    flex: '1',
    minWidth: '180px', // Ensures both buttons are equal size
};

const infoStyle = {
    marginTop: '15px',
    color: '#777',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
};

const chatbotStyle = {
    position: 'absolute',
    backgroundColor: '#ff5722',
    color: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease',
};

export default Home;
