"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsClient = void 0;
class AppsClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * List marketplace apps
     */
    async listMarketplace(category) {
        const { data } = await this.client.get('/marketplace/apps', {
            params: { category },
        });
        return data;
    }
    /**
     * Get marketplace app details
     */
    async getMarketplaceApp(appId) {
        const { data } = await this.client.get(`/marketplace/apps/${appId}`);
        return data;
    }
    /**
     * List installed apps for workspace
     */
    async listInstalled(workspaceId) {
        const { data } = await this.client.get(`/workspaces/${workspaceId}/apps`);
        return data;
    }
    /**
     * Install app to workspace
     */
    async install(workspaceId, appId) {
        const { data } = await this.client.post(`/workspaces/${workspaceId}/apps/${appId}`);
        return data;
    }
    /**
     * Uninstall app from workspace
     */
    async uninstall(workspaceId, appId) {
        await this.client.delete(`/workspaces/${workspaceId}/apps/${appId}`);
    }
    /**
     * Update app permissions
     */
    async updatePermissions(workspaceId, appId, permissions) {
        const { data } = await this.client.patch(`/workspaces/${workspaceId}/apps/${appId}/permissions`, { permissions });
        return data;
    }
}
exports.AppsClient = AppsClient;
