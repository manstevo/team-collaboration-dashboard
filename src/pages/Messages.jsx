import React, { useState } from 'react';
import '../styles/Button.css';

function Messages() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div>
            <h2 style={{ marginBottom: '20px' }}>Messages Page</h2>
            <div
                style={{
                    marginTop: '10px',
                    backgroundColor: '#2c2c2c',
                    border: '1px solid #444',
                    borderRadius: '10px',
                    padding: '15px',
                    height: '300px',
                    overflowY: 'auto',
                    color: '#fff',
                }}
            >
                {messages.length > 0 ? (
                    messages.map((message, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '10px',
                                marginBottom: '10px',
                                borderRadius: '5px',
                                backgroundColor: '#444',
                                color: '#fff',
                                wordBreak: 'break-word',
                            }}
                        >
                            {message}
                        </div>
                    ))
                ) : (
                    <p style={{ color: '#aaa', textAlign: 'center' }}>No messages yet.</p>
                )}
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <input
                    type="text"
                    placeholder="Type a message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    style={{
                        flex: 1,
                        padding: '10px',
                        border: '1px solid #444',
                        borderRadius: '5px',
                        backgroundColor: '#1e1e1e',
                        color: '#fff',
                    }}
                />
                <button
                    class="button"
                    onClick={handleSendMessage}>
                    <div

                     className="wrap">
                        <p>
                            <span>✧</span>
                            <span>✦</span>
                            Send
                        </p>
                    </div>        
                </button>
            </div>
        </div>
    );
}

export default Messages;
