const SEVERITY_TYPE = {
    error: 'error',
    info: 'info',
    success: 'success'
};

const SEVERITY_CLASSES = {
    [SEVERITY_TYPE.error]: 'toast toast-error',
    [SEVERITY_TYPE.info]: 'toast toast-info',
    [SEVERITY_TYPE.success]: 'toast toast-success'
};

export {
    SEVERITY_TYPE,
    SEVERITY_CLASSES
};

export type MessageViewProps = {
    message: React.ReactNode,
    severity: string
};