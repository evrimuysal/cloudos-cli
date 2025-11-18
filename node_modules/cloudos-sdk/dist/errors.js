"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.NotFoundError = exports.AuthorizationError = exports.AuthenticationError = exports.CloudOSError = void 0;
class CloudOSError extends Error {
    constructor(message, statusCode, response) {
        super(message);
        this.statusCode = statusCode;
        this.response = response;
        this.name = 'CloudOSError';
        Object.setPrototypeOf(this, CloudOSError.prototype);
    }
}
exports.CloudOSError = CloudOSError;
class AuthenticationError extends CloudOSError {
    constructor(message = 'Authentication failed') {
        super(message, 401);
        this.name = 'AuthenticationError';
    }
}
exports.AuthenticationError = AuthenticationError;
class AuthorizationError extends CloudOSError {
    constructor(message = 'Insufficient permissions') {
        super(message, 403);
        this.name = 'AuthorizationError';
    }
}
exports.AuthorizationError = AuthorizationError;
class NotFoundError extends CloudOSError {
    constructor(message = 'Resource not found') {
        super(message, 404);
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
class ValidationError extends CloudOSError {
    constructor(message = 'Validation failed') {
        super(message, 400);
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
