"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appsCommand = void 0;
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const client_1 = require("../utils/client");
const workspace_1 = require("../utils/workspace");
exports.appsCommand = {
    async list(options) {
        const workspaceId = (0, workspace_1.getWorkspaceId)(options.workspace);
        const spinner = (0, ora_1.default)('Loading apps...').start();
        try {
            const cloudos = (0, client_1.getCloudOS)();
            const apps = await cloudos.apps.listInstalled(workspaceId);
            spinner.stop();
            if (apps.length === 0) {
                console.log(chalk_1.default.yellow('No apps installed'));
                return;
            }
            console.log(chalk_1.default.blue.bold('\n📱 Installed Apps\n'));
            apps.forEach((app) => {
                console.log(`${app.name}`);
                console.log(chalk_1.default.gray(`  ID: ${app.id}`));
                console.log(chalk_1.default.gray(`  Type: ${app.type}\n`));
            });
        }
        catch (error) {
            spinner.fail(chalk_1.default.red('Failed to load apps'));
            console.error(chalk_1.default.red(error.message));
            process.exit(1);
        }
    },
    async install(appId, options) {
        const workspaceId = (0, workspace_1.getWorkspaceId)(options.workspace);
        const spinner = (0, ora_1.default)('Installing app...').start();
        try {
            const cloudos = (0, client_1.getCloudOS)();
            const app = await cloudos.apps.install(workspaceId, appId);
            spinner.succeed(chalk_1.default.green(`Installed ${app.name}`));
        }
        catch (error) {
            spinner.fail(chalk_1.default.red('Failed to install app'));
            console.error(chalk_1.default.red(error.message));
            process.exit(1);
        }
    },
    async uninstall(appId, options) {
        const workspaceId = (0, workspace_1.getWorkspaceId)(options.workspace);
        const spinner = (0, ora_1.default)('Uninstalling app...').start();
        try {
            const cloudos = (0, client_1.getCloudOS)();
            await cloudos.apps.uninstall(workspaceId, appId);
            spinner.succeed(chalk_1.default.green('App uninstalled'));
        }
        catch (error) {
            spinner.fail(chalk_1.default.red('Failed to uninstall app'));
            console.error(chalk_1.default.red(error.message));
            process.exit(1);
        }
    },
};
