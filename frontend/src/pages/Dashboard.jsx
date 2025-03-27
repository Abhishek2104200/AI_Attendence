import React, { useState } from "react";
import AttendanceChart from "../components/AttendanceChart";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaUsers, FaChartLine, FaExclamationTriangle, FaRobot, FaPaperPlane } from "react-icons/fa";

const Dashboard = () => {
    const navigate = useNavigate();
    const [chatOpen, setChatOpen] = useState(false);
    const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 100 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleLogout = () => {
        navigate("/");
    };

    const handleMouseDown = (e) => {
        setDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div style={styles.container} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <h2 style={styles.heading}>
                <FaUsers style={styles.headingIcon} /> Admin Dashboard
            </h2>

            <div style={styles.contentWrapper}>
                <div style={styles.leftSection}>
                    <div style={styles.cardContainer}>
                        <div style={styles.card}>
                            <FaUserGraduate style={styles.cardIcon} />
                            <h5>Total Students</h5>
                            <h3>50</h3>
                        </div>
                        <div style={styles.card}>
                            <FaChartLine style={styles.cardIcon} />
                            <h5>Average Attendance</h5>
                            <h3>85%</h3>
                        </div>
                        <div style={styles.card}>
                            <FaExclamationTriangle style={styles.cardIcon} />
                            <h5>Below 75%</h5>
                            <h3>5</h3>
                        </div>
                    </div>
                </div>
                <div style={styles.rightSection}>
                    <AttendanceChart />
                </div>
            </div>

            <button style={styles.button} onClick={handleLogout}>
                Logout
            </button>

            {/* Draggable Chatbot Icon */}
            <div
                style={{ ...styles.chatbotIcon, left: `${position.x}px`, top: `${position.y}px` }}
                onMouseDown={handleMouseDown}
                onClick={() => setChatOpen(!chatOpen)}
            >
                <FaRobot size={32} />
            </div>

            {chatOpen && (
                <div style={styles.chatWindow}>
                    <div style={styles.chatHeader}>
                        <span>Chatbot</span>
                        <button onClick={() => setChatOpen(false)} style={styles.closeButton}>X</button>
                    </div>
                    <div style={styles.chatBody}>
                        <p>Hi I am VITAS! How can I assist you?</p>
                        <div style={styles.inputContainer}>
                            <input type="text" placeholder="Type a message..." style={styles.chatInput} />
                            <button style={styles.sendButton}>
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        padding: "20px",
        background: "linear-gradient(to right, #e0eafc, #cfdef3)", // Smooth blue-gray gradient
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
    }
    ,
    heading: {
        fontSize: "2.5rem",
        fontWeight: "700",
        marginBottom: "30px",
        color: "#333",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    headingIcon: {
        color: "#4c6ef5",
    },
    contentWrapper: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        maxWidth: "1400px",
    },
    leftSection: {
        flex: 1,
        padding: "20px",
    },
    rightSection: {
        flex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    },
    cardContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        width: "100%",
    },
    card: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    cardIcon: {
        fontSize: "1.8rem",
        color: "#4c6ef5",
        marginBottom: "10px",
    },
    button: {
        backgroundColor: "#d9534f",
        color: "white",
        padding: "12px 30px",
        borderRadius: "8px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        border: "none",
        fontSize: "1rem",
        marginTop: "30px",
        display: "block",
        width: "100%",
        maxWidth: "200px",
    },
    chatbotIcon: {
        position: "fixed",
        backgroundColor: "#4c6ef5",
        color: "white",
        borderRadius: "50%",
        padding: "15px",
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 10,
        position: "absolute",
    },
    chatWindow: {
        position: "fixed",
        bottom: "80px",
        right: "20px",
        width: "300px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
    },
    chatHeader: {
        backgroundColor: "#4c6ef5",
        color: "white",
        padding: "10px",
        fontWeight: "600",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    closeButton: {
        background: "none",
        border: "none",
        color: "white",
        fontSize: "1rem",
        cursor: "pointer",
    },
    chatBody: {
        padding: "10px",
        minHeight: "150px",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
    },
    chatInput: {
        flex: 1,
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    sendButton: {
        background: "#4c6ef5",
        color: "white",
        border: "none",
        padding: "8px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default Dashboard;
