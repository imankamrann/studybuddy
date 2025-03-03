// src/components/MessagePage.js
import React, { useState } from 'react';

const MessagePage = () => {
    // State for managing the selected conversation
    const [selectedConversation, setSelectedConversation] = useState(null);

    // State for managing the new message input
    const [newMessage, setNewMessage] = useState('');

    // Sample data for messages
    const conversations = [
        {
            id: 1,
            sender: 'Tutor',
            messages: [
                { text: 'Don\'t forget the deadline!', timestamp: '10/24, 3:00 PM' },
                { text: 'Are you free to meet tomorrow?', timestamp: '10/25, 10:00 AM' },
            ],
        },
        {
            id: 2,
            sender: 'Peer',
            messages: [
                { text: 'Let\'s meet tomorrow.', timestamp: '10/23, 4:00 PM' },
            ],
        },
        {
            id: 3,
            sender: 'Group A',
            messages: [
                { text: 'New notes uploaded.', timestamp: '10/20, 2:00 PM' },
            ],
        },
    ];

    // Function to handle sending a new message
    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        // Add the new message to the selected conversation
        const updatedConversation = {
            ...selectedConversation,
            messages: [
                ...selectedConversation.messages,
                { text: newMessage, timestamp: new Date().toLocaleString() },
            ],
        };

        // Update the selected conversation
        setSelectedConversation(updatedConversation);

        // Clear the input field
        setNewMessage('');
    };

    // Inline styles
    const styles = {
        messagePage: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        },
        main: {
            display: 'flex',
            flex: 1,
        },
        content: {
            flex: 3,
            padding: '20px',
            display: 'flex',
        },
        messageInbox: {
            width: '30%',
            borderRight: '1px solid #ccc',
            paddingRight: '20px',
        },
        searchInput: {
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
        },
        conversationList: {
            listStyle: 'none',
            padding: 0,
        },
        conversationItem: {
            padding: '10px',
            borderBottom: '1px solid #eee',
            cursor: 'pointer',
        },
        conversationItemHover: {
            backgroundColor: '#f5f5f5',
        },
        selectedConversation: {
            flex: 1,
            paddingLeft: '20px',
        },
        messageThread: {
            height: '60vh',
            overflowY: 'auto',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '20px',
        },
        message: {
            marginBottom: '10px',
        },
        messageInput: {
            display: 'flex',
            gap: '10px',
        },
        messageInputField: {
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
        },
        sendButton: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        sendButtonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={styles.messagePage}>
            <main style={styles.main}>
                <div style={styles.content}>
                    {/* Message Inbox */}
                    <div style={styles.messageInbox}>
                        <input
                            type="text"
                            placeholder="Search for messages..."
                            style={styles.searchInput}
                            onChange={(e) => console.log('Search:', e.target.value)} // Add search functionality
                        />
                        <ul style={styles.conversationList}>
                            {conversations.map((conversation) => (
                                <li
                                    key={conversation.id}
                                    onClick={() => setSelectedConversation(conversation)}
                                    style={{
                                        ...styles.conversationItem,
                                        ...(selectedConversation?.id === conversation.id && { backgroundColor: '#e0e0e0' }),
                                    }}
                                >
                                    <strong>{conversation.sender}</strong>
                                    <p>{conversation.messages[0].text}</p>
                                    <em>{conversation.messages[0].timestamp}</em>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Selected Conversation */}
                    <div style={styles.selectedConversation}>
                        {selectedConversation ? (
                            <>
                                <h2>{selectedConversation.sender}</h2>
                                <div style={styles.messageThread}>
                                    {selectedConversation.messages.map((message, index) => (
                                        <div key={index} style={styles.message}>
                                            <strong>{message.sender || 'You'}:</strong> {message.text}{' '}
                                            <em>{message.timestamp}</em>
                                        </div>
                                    ))}
                                </div>
                                <div style={styles.messageInput}>
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        style={styles.messageInputField}
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        style={styles.sendButton}
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
            </main>
        </div>
    );
};

export default MessagePage;