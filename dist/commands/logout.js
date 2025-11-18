"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutCommand = logoutCommand;
const chalk_1 = __importDefault(require("chalk"));
const config_1 = require("../utils/config");
async function logoutCommand() {
    config_1.config.delete('token');
    config_1.config.delete('user');
    config_1.config.delete('defaultWorkspace');
    console.log(chalk_1.default.green('✓ Logged out successfully'));
}
