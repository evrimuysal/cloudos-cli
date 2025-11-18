export interface CloudOSConfig {
    apiUrl?: string;
    apiKey?: string;
    token?: string;
}
export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    workspaces?: Workspace[];
}
export interface LoginCredentials {
    email: string;
    password: string;
}
export interface RegisterData {
    email: string;
    password: string;
    name: string;
}
export interface Workspace {
    id: string;
    name: string;
    slug: string;
    plan: string;
    settings: any;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
}
export interface CreateWorkspaceData {
    name: string;
    slug: string;
}
export interface WorkspaceMember {
    workspaceId: string;
    userId: string;
    role: 'owner' | 'admin' | 'member' | 'viewer';
    permissions: string[];
    user: User;
    joinedAt: string;
}
export interface App {
    id: string;
    name: string;
    description: string;
    icon: string;
    category: string;
}
export interface MarketplaceApp extends App {
    slug: string;
    developer: string;
    version: string;
    pricing: any;
    rating: number;
    installCount: number;
}
export interface WorkspaceApp {
    id: string;
    workspaceId: string;
    marketplaceAppId: string;
    name: string;
    description: string;
    icon: string;
    type: string;
    url?: string;
    installedBy: string;
    installedAt: string;
}
export interface Notification {
    id: string;
    userId: string;
    type: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
}
export interface Webhook {
    id: string;
    workspaceId: string;
    url: string;
    events: string[];
    secret: string;
    enabled: boolean;
    createdAt: string;
}
export interface CreateWebhookData {
    url: string;
    events: string[];
}
