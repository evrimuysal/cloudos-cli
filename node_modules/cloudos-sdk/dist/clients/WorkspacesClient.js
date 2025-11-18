"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesClient = void 0;
class WorkspacesClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * List all workspaces for current user
     */
    async list() {
        const { data } = await this.client.get('/workspaces');
        return data;
    }
    /**
     * Get workspace by ID
     */
    async get(workspaceId) {
        const { data } = await this.client.get(`/workspaces/${workspaceId}`);
        return data;
    }
    /**
     * Create new workspace
     */
    async create(workspaceData) {
        const { data } = await this.client.post('/workspaces', workspaceData);
        return data;
    }
    /**
     * Update workspace
     */
    async update(workspaceId, updates) {
        const { data } = await this.client.patch(`/workspaces/${workspaceId}`, updates);
        return data;
    }
    /**
     * Delete workspace
     */
    async delete(workspaceId) {
        await this.client.delete(`/workspaces/${workspaceId}`);
    }
    /**
     * Get workspace members
     */
    async getMembers(workspaceId) {
        const { data } = await this.client.get(`/workspaces/${workspaceId}/members`);
        return data;
    }
    /**
     * Invite member to workspace
     */
    async inviteMember(workspaceId, email, role) {
        const { data } = await this.client.post(`/workspaces/${workspaceId}/members`, {
            email,
            role,
        });
        return data;
    }
    /**
     * Update member role
     */
    async updateMemberRole(workspaceId, userId, role) {
        const { data } = await this.client.patch(`/workspaces/${workspaceId}/members/${userId}`, { role });
        return data;
    }
    /**
     * Remove member from workspace
     */
    async removeMember(workspaceId, userId) {
        await this.client.delete(`/workspaces/${workspaceId}/members/${userId}`);
    }
}
exports.WorkspacesClient = WorkspacesClient;
