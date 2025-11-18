"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthClient = void 0;
class AuthClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Login with email and password
     */
    async login(credentials) {
        const { data } = await this.client.post('/auth/login', credentials);
        return data;
    }
    /**
     * Register new user
     */
    async register(userData) {
        const { data } = await this.client.post('/auth/register', userData);
        return data;
    }
    /**
     * Get current user
     */
    async getCurrentUser() {
        const { data } = await this.client.get('/auth/me');
        return data;
    }
    /**
     * Logout
     */
    async logout() {
        await this.client.post('/auth/logout');
    }
}
exports.AuthClient = AuthClient;
