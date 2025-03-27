import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // Import icons

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            navigate("/dashboard");
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Admin Login</h2>
                <form onSubmit={handleLogin} style={styles.form}>
                    {/* Username Input Field */}
                    <div style={styles.inputContainer}>
                        <FaUser style={styles.icon} />
                        <input
                            type="text"
                            placeholder="Username"
                            style={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Password Input Field */}
                    <div style={styles.inputContainer}>
                        <FaLock style={styles.icon} />
                        <input
                            type="password"
                            placeholder="Password"
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

// Styling
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(to right, #4c6ef5, #3f3cbb)',
        padding: '0 20px',
    },
    card: {
        backgroundColor: 'white',
        padding: '40px 30px',
        borderRadius: '12px',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        fontWeight: '600',
        color: '#333',
        marginBottom: '24px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        padding: '10px 14px',
    },
    icon: {
        color: '#666',
        marginRight: '10px',
    },
    input: {
        border: 'none',
        background: 'transparent',
        outline: 'none',
        fontSize: '1rem',
        width: '100%',
    },
    button: {
        backgroundColor: '#4c6ef5',
        color: 'white',
        padding: '12px 30px',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        border: 'none',
        fontSize: '1rem',
        width: '100%',
    },
    buttonHover: {
        backgroundColor: '#3f3cbb',
    },
};

export default Login;
