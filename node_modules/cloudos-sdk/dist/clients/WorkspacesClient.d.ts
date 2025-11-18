import { AxiosInstance } from 'axios';
import { Workspace, WorkspaceMember, CreateWorkspaceData } from '../types';
export declare class WorkspacesClient {
    private client;
    constructor(client: AxiosInstance);
    /**
     * List all workspaces for current user
     */
    list(): Promise<Workspace[]>;
    /**
     * Get workspace by ID
     */
    get(workspaceId: string): Promise<Workspace>;
    /**
     * Create new workspace
     */
    create(workspaceData: CreateWorkspaceData): Promise<Workspace>;
    /**
     * Update workspace
     */
    update(workspaceId: string, updates: Partial<Workspace>): Promise<Workspace>;
    /**
     * Delete workspace
     */
    delete(workspaceId: string): Promise<void>;
    /**
     * Get workspace members
     */
    getMembers(workspaceId: string): Promise<WorkspaceMember[]>;
    /**
     * Invite member to workspace
     */
    inviteMember(workspaceId: string, email: string, role: string): Promise<WorkspaceMember>;
    /**
     * Update member role
     */
    updateMemberRole(workspaceId: string, userId: string, role: string): Promise<WorkspaceMember>;
    /**
     * Remove member from workspace
     */
    removeMember(workspaceId: string, userId: string): Promise<void>;
}
