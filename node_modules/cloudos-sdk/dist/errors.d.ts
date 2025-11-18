export declare class CloudOSError extends Error {
    statusCode: number;
    response?: any | undefined;
    constructor(message: string, statusCode: number, response?: any | undefined);
}
export declare class AuthenticationError extends CloudOSError {
    constructor(message?: string);
}
export declare class AuthorizationError extends CloudOSError {
    constructor(message?: string);
}
export declare class NotFoundError extends CloudOSError {
    constructor(message?: string);
}
export declare class ValidationError extends CloudOSError {
    constructor(message?: string);
}
