import React from 'react';
import { Message } from './Message';
import { withKnobs, text, radios } from '@storybook/addon-knobs';

export default {
    component: Message,
    title: 'Message',
    decorators: [withKnobs]
};

const TextMessage = () => {
    const message = text('Message', 'You can provide text to Message Component');
    const severity = radios('Severity', {
        Success: 'success',
        Info: 'info',
        Error: 'error'
    }, 'success');

    return <Message
        message={message}
        severity={severity}
    />;
};

const ReactnodeMessage = () => {
    const message = <div><h3>⚠️Error!</h3><p>You can provide JSX to Message Component</p></div>;
    const severity = radios('Severity', {
        Success: 'success',
        Info: 'info',
        Error: 'error'
    }, 'error');

    return <Message
        message={message}
        severity={severity}
    />;
};

export {
    TextMessage,
    ReactnodeMessage
};