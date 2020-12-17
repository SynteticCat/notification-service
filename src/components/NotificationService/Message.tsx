import React from 'react';
import './Message.css';
import { MessageViewProps, SEVERITY_CLASSES } from './data';

export const Message = ({ message, severity }: MessageViewProps) => {
    return (
        <div className={SEVERITY_CLASSES[severity]}>
            <div className="toast-message">{message}</div>
        </div>
    );
};