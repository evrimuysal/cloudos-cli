import { AxiosInstance } from 'axios';
export declare class AnalyticsClient {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Get workspace analytics
     */
    getWorkspaceAnalytics(workspaceId: string, period?: string): Promise<any>;
    /**
     * Get app usage stats
     */
    getAppUsageStats(workspaceId: string, appId: string): Promise<any>;
}
