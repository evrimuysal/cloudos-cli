import { AxiosInstance } from 'axios';
import { User, LoginCredentials, RegisterData } from '../types';
export declare class AuthClient {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Login with email and password
     */
    login(credentials: LoginCredentials): Promise<{
        token: string;
        user: User;
    }>;
    /**
     * Register new user
     */
    register(userData: RegisterData): Promise<{
        token: string;
        user: User;
    }>;
    /**
     * Get current user
     */
    getCurrentUser(): Promise<User>;
    /**
     * Logout
     */
    logout(): Promise<void>;
}
