import { AxiosInstance } from 'axios';
import { Notification } from '../types';
export declare class NotificationsClient {
    private client;
    constructor(client: AxiosInstance);
    /**
     * List notifications
     */
    list(): Promise<Notification[]>;
    /**
     * Mark notification as read
     */
    markAsRead(notificationId: string): Promise<void>;
    /**
     * Mark all notifications as read
     */
    markAllAsRead(): Promise<void>;
}
