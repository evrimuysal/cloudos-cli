import { AuthClient } from './clients/AuthClient';
import { WorkspacesClient } from './clients/WorkspacesClient';
import { AppsClient } from './clients/AppsClient';
import { StorageClient } from './clients/StorageClient';
import { AnalyticsClient } from './clients/AnalyticsClient';
import { NotificationsClient } from './clients/NotificationsClient';
import { WebhooksClient } from './clients/WebhooksClient';
import { CloudOSConfig } from './types';
export declare class CloudOS {
    private client;
    private token;
    auth: AuthClient;
    workspaces: WorkspacesClient;
    apps: AppsClient;
    storage: StorageClient;
    analytics: AnalyticsClient;
    notifications: NotificationsClient;
    webhooks: WebhooksClient;
    constructor(config: CloudOSConfig);
    /**
     * Set authentication token
     */
    setToken(token: string): void;
    /**
     * Clear authentication token
     */
    clearToken(): void;
    /**
     * Get current token
     */
    getToken(): string | null;
}
export default CloudOS;
