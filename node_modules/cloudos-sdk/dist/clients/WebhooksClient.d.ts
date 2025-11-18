import { AxiosInstance } from 'axios';
import { Webhook, CreateWebhookData } from '../types';
export declare class WebhooksClient {
    private client;
    constructor(client: AxiosInstance);
    /**
     * List webhooks
     */
    list(workspaceId: string): Promise<Webhook[]>;
    /**
     * Create webhook
     */
    create(workspaceId: string, webhookData: CreateWebhookData): Promise<Webhook>;
    /**
     * Get webhook
     */
    get(workspaceId: string, webhookId: string): Promise<Webhook>;
    /**
     * Update webhook
     */
    update(workspaceId: string, webhookId: string, updates: Partial<Webhook>): Promise<Webhook>;
    /**
     * Delete webhook
     */
    delete(workspaceId: string, webhookId: string): Promise<void>;
    /**
     * Test webhook
     */
    test(workspaceId: string, webhookId: string): Promise<any>;
}
