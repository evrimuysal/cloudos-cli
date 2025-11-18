"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksClient = void 0;
class WebhooksClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * List webhooks
     */
    async list(workspaceId) {
        const { data } = await this.client.get(`/workspaces/${workspaceId}/webhooks`);
        return data;
    }
    /**
     * Create webhook
     */
    async create(workspaceId, webhookData) {
        const { data } = await this.client.post(`/workspaces/${workspaceId}/webhooks`, webhookData);
        return data;
    }
    /**
     * Get webhook
     */
    async get(workspaceId, webhookId) {
        const { data } = await this.client.get(`/workspaces/${workspaceId}/webhooks/${webhookId}`);
        return data;
    }
    /**
     * Update webhook
     */
    async update(workspaceId, webhookId, updates) {
        const { data } = await this.client.patch(`/workspaces/${workspaceId}/webhooks/${webhookId}`, updates);
        return data;
    }
    /**
     * Delete webhook
     */
    async delete(workspaceId, webhookId) {
        await this.client.delete(`/workspaces/${workspaceId}/webhooks/${webhookId}`);
    }
    /**
     * Test webhook
     */
    async test(workspaceId, webhookId) {
        const { data } = await this.client.post(`/workspaces/${workspaceId}/webhooks/${webhookId}/test`);
        return data;
    }
}
exports.WebhooksClient = WebhooksClient;
