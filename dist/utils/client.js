"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudOS = getCloudOS;
const sdk_1 = require("@cloudos/sdk");
const config_1 = require("./config");
const chalk_1 = __importDefault(require("chalk"));
function getCloudOS() {
    const token = config_1.config.get('token');
    if (!token) {
        console.error(chalk_1.default.red('Not logged in'));
        console.log(chalk_1.default.gray('Run "cloudos login" first'));
        process.exit(1);
    }
    return new sdk_1.CloudOS({
        apiUrl: config_1.config.get('apiUrl'),
        token,
    });
}
