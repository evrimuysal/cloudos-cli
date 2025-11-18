"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkspaceId = getWorkspaceId;
const config_1 = require("./config");
const chalk_1 = __importDefault(require("chalk"));
function getWorkspaceId(providedId) {
    const workspaceId = providedId || config_1.config.get('defaultWorkspace');
    if (!workspaceId) {
        console.error(chalk_1.default.red('No workspace specified'));
        console.log(chalk_1.default.gray('Use --workspace <id> or set a default workspace'));
        process.exit(1);
    }
    return workspaceId;
}
