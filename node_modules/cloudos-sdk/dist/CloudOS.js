"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudOS = void 0;
const axios_1 = __importDefault(require("axios"));
const AuthClient_1 = require("./clients/AuthClient");
const WorkspacesClient_1 = require("./clients/WorkspacesClient");
const AppsClient_1 = require("./clients/AppsClient");
const StorageClient_1 = require("./clients/StorageClient");
const AnalyticsClient_1 = require("./clients/AnalyticsClient");
const NotificationsClient_1 = require("./clients/NotificationsClient");
const WebhooksClient_1 = require("./clients/WebhooksClient");
const errors_1 = require("./errors");
class CloudOS {
    constructor(config) {
        this.token = null;
        this.client = axios_1.default.create({
            baseURL: config.apiUrl || 'https://api.cloudos.io',
            headers: {
                'Content-Type': 'application/json',
                ...(config.apiKey && { 'X-API-Key': config.apiKey }),
            },
        });
        // Response interceptor for error handling
        this.client.interceptors.response.use((response) => response, (error) => {
            throw new errors_1.CloudOSError(error.response?.data?.message || error.message, error.response?.status || 500, error.response?.data);
        });
        // Initialize clients
        this.auth = new AuthClient_1.AuthClient(this.client);
        this.workspaces = new WorkspacesClient_1.WorkspacesClient(this.client);
        this.apps = new AppsClient_1.AppsClient(this.client);
        this.storage = new StorageClient_1.StorageClient(this.client);
        this.analytics = new AnalyticsClient_1.AnalyticsClient(this.client);
        this.notifications = new NotificationsClient_1.NotificationsClient(this.client);
        this.webhooks = new WebhooksClient_1.WebhooksClient(this.client);
        // Set token if provided
        if (config.token) {
            this.setToken(config.token);
        }
    }
    /**
     * Set authentication token
     */
    setToken(token) {
        this.token = token;
        this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    /**
     * Clear authentication token
     */
    clearToken() {
        this.token = null;
        delete this.client.defaults.headers.common['Authorization'];
    }
    /**
     * Get current token
     */
    getToken() {
        return this.token;
    }
}
exports.CloudOS = CloudOS;
exports.default = CloudOS;
