const initialState = {
    messages: [
        { id: '1', severity: 'success', value: 'message 1' },
        { id: '2', severity: 'info', value: 'message 2' },
        { id: '3', severity: 'error', value: 'message 3' },
    ]
};

export const Reducer = (state = initialState, action) => {
    return state;
}