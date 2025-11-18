"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsClient = void 0;
class NotificationsClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * List notifications
     */
    async list() {
        const { data } = await this.client.get('/notifications');
        return data;
    }
    /**
     * Mark notification as read
     */
    async markAsRead(notificationId) {
        await this.client.patch(`/notifications/${notificationId}/read`);
    }
    /**
     * Mark all notifications as read
     */
    async markAllAsRead() {
        await this.client.patch('/notifications/read-all');
    }
}
exports.NotificationsClient = NotificationsClient;
