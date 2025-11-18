"use strict";
/**
 * CloudOS SDK
 * Official JavaScript/TypeScript SDK for CloudOS Platform
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksClient = exports.NotificationsClient = exports.AnalyticsClient = exports.StorageClient = exports.AppsClient = exports.WorkspacesClient = exports.AuthClient = exports.CloudOS = void 0;
var CloudOS_1 = require("./CloudOS");
Object.defineProperty(exports, "CloudOS", { enumerable: true, get: function () { return CloudOS_1.CloudOS; } });
var AuthClient_1 = require("./clients/AuthClient");
Object.defineProperty(exports, "AuthClient", { enumerable: true, get: function () { return AuthClient_1.AuthClient; } });
var WorkspacesClient_1 = require("./clients/WorkspacesClient");
Object.defineProperty(exports, "WorkspacesClient", { enumerable: true, get: function () { return WorkspacesClient_1.WorkspacesClient; } });
var AppsClient_1 = require("./clients/AppsClient");
Object.defineProperty(exports, "AppsClient", { enumerable: true, get: function () { return AppsClient_1.AppsClient; } });
var StorageClient_1 = require("./clients/StorageClient");
Object.defineProperty(exports, "StorageClient", { enumerable: true, get: function () { return StorageClient_1.StorageClient; } });
var AnalyticsClient_1 = require("./clients/AnalyticsClient");
Object.defineProperty(exports, "AnalyticsClient", { enumerable: true, get: function () { return AnalyticsClient_1.AnalyticsClient; } });
var NotificationsClient_1 = require("./clients/NotificationsClient");
Object.defineProperty(exports, "NotificationsClient", { enumerable: true, get: function () { return NotificationsClient_1.NotificationsClient; } });
var WebhooksClient_1 = require("./clients/WebhooksClient");
Object.defineProperty(exports, "WebhooksClient", { enumerable: true, get: function () { return WebhooksClient_1.WebhooksClient; } });
__exportStar(require("./types"), exports);
__exportStar(require("./errors"), exports);
