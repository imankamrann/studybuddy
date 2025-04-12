import React, { useState, useEffect, useRef } from 'react';

const MessagePage = () => {
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [newConversationRecipient, setNewConversationRecipient] = useState('');
    const messagesEndRef = useRef(null);

    const [conversations, setConversations] = useState([
        {
            id: 1,
            sender: 'Tutor',
            messages: [
                { text: 'Don\'t forget the deadline!', timestamp: '10/24, 3:00 PM', fromMe: false },
                { text: 'Are you free to meet tomorrow?', timestamp: '10/25, 10:00 AM', fromMe: true },
            ],
        },
        {
            id: 2,
            sender: 'Peer',
            messages: [{ text: 'Let\'s meet tomorrow.', timestamp: '10/23, 4:00 PM', fromMe: false }],
        },
        {
            id: 3,
            sender: 'Group A',
            messages: [{ text: 'New notes uploaded.', timestamp: '10/20, 2:00 PM', fromMe: false }],
        },
    ]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [selectedConversation]);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const newMsg = {
            text: newMessage,
            timestamp: new Date().toLocaleString(),
            fromMe: true,
        };

        const updatedConversation = {
            ...selectedConversation,
            messages: [...selectedConversation.messages, newMsg],
        };

        setSelectedConversation(updatedConversation);

        setConversations((prev) =>
            prev.map((conv) =>
                conv.id === updatedConversation.id ? updatedConversation : conv
            )
        );

        setNewMessage('');
    };

    const handleStartNewConversation = () => {
        if (!newConversationRecipient.trim()) return;

        const newConv = {
            id: conversations.length + 1,
            sender: newConversationRecipient.trim(),
            messages: [],
        };

        setConversations([...conversations, newConv]);
        setSelectedConversation(newConv);
        setNewConversationRecipient('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Messages</h2>
            <div style={{ display: 'flex' }}>
                {/* Sidebar */}
                <div style={{ width: '30%', paddingRight: '20px', borderRight: '1px solid #ccc' }}>
                    <input
                        type="text"
                        placeholder="New recipient..."
                        value={newConversationRecipient}
                        onChange={(e) => setNewConversationRecipient(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                    <button
                        onClick={handleStartNewConversation}
                        style={{ width: '100%', padding: '10px', marginBottom: '20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
                    >
                        Start New Conversation
                    </button>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {conversations.map((conv) => {
                            const last = conv.messages[conv.messages.length - 1];
                            return (
                                <li
                                    key={conv.id}
                                    onClick={() => setSelectedConversation(conv)}
                                    style={{
                                        padding: '10px',
                                        borderBottom: '1px solid #eee',
                                        cursor: 'pointer',
                                        backgroundColor: selectedConversation?.id === conv.id ? '#f0f0f0' : 'transparent'
                                    }}
                                >
                                    <strong>{conv.sender}</strong>
                                    <p>{last?.text || 'No messages yet'}</p>
                                    <em>{last?.timestamp}</em>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Chat area */}
                <div style={{ flex: 1, paddingLeft: '20px' }}>
                    {selectedConversation ? (
                        <>
                            <h3>{selectedConversation.sender}</h3>
                            <div style={{
                                height: '60vh',
                                overflowY: 'auto',
                                border: '1px solid #ccc',
                                padding: '10px',
                                marginBottom: '10px',
                                borderRadius: '5px',
                                backgroundColor: '#f9f9f9'
                            }}>
                                {selectedConversation.messages.map((msg, i) => (
                                    <div key={i} style={{ marginBottom: '10px', textAlign: msg.fromMe ? 'right' : 'left' }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '10px',
                                            backgroundColor: msg.fromMe ? '#d1ecf1' : '#e2e3e5',
                                            borderRadius: '10px',
                                            maxWidth: '70%'
                                        }}>
                                            <p style={{ margin: 0 }}>{msg.text}</p>
                                            <small>{msg.timestamp}</small>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef}></div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
                                >
                                    Send
                                </button>
                            </div>
                        </>
                    ) : (
                        <p>Select a conversation to start messaging.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessagePage;
