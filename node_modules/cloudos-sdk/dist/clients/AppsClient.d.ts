import { AxiosInstance } from 'axios';
import { MarketplaceApp, WorkspaceApp } from '../types';
export declare class AppsClient {
    private client;
    constructor(client: AxiosInstance);
    /**
     * List marketplace apps
     */
    listMarketplace(category?: string): Promise<MarketplaceApp[]>;
    /**
     * Get marketplace app details
     */
    getMarketplaceApp(appId: string): Promise<MarketplaceApp>;
    /**
     * List installed apps for workspace
     */
    listInstalled(workspaceId: string): Promise<WorkspaceApp[]>;
    /**
     * Install app to workspace
     */
    install(workspaceId: string, appId: string): Promise<WorkspaceApp>;
    /**
     * Uninstall app from workspace
     */
    uninstall(workspaceId: string, appId: string): Promise<void>;
    /**
     * Update app permissions
     */
    updatePermissions(workspaceId: string, appId: string, permissions: any): Promise<WorkspaceApp>;
}
