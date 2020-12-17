import React from 'react';
import { connect } from 'react-redux';
import { Message } from './Message';
import './Message.css';

// TODO: change any type to concrete type
// TODO: change export default to export (types as problem)

const mapStateToProps = (state:any) => {
    return {
        messages: state.messages
    }
};

const MessageContainer = ({ messages }:any) => {
    const RenderMessages = messages.map((message:any) => {
        return <Message 
            key={message.id}
            severity={message.severity}
            message={message.value}
        />
    });

    return (
        <div>
            <h1>Message Container</h1>
            <div className="toast-container">{RenderMessages}</div>
        </div>
    );
};

export default connect(mapStateToProps)(MessageContainer);
