import React from 'react';
import MessageContainer from './MessageContainer';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../../redux/configureStore';

const store = ConfigureStore();

export default {
    component: MessageContainer,
    title: 'MessageContainer'
};

const Common = () => {
    return <Provider store={store}><MessageContainer /></Provider>;
};

export {
    Common
};