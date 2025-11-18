"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsClient = void 0;
class AnalyticsClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get workspace analytics
     */
    async getWorkspaceAnalytics(workspaceId, period = '7d') {
        const { data } = await this.client.get(`/workspaces/${workspaceId}/analytics`, {
            params: { period },
        });
        return data;
    }
    /**
     * Get app usage stats
     */
    async getAppUsageStats(workspaceId, appId) {
        const { data } = await this.client.get(`/workspaces/${workspaceId}/apps/${appId}/stats`);
        return data;
    }
}
exports.AnalyticsClient = AnalyticsClient;
