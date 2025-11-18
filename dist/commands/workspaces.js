"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspacesCommand = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const client_1 = require("../utils/client");
const config_1 = require("../utils/config");
exports.workspacesCommand = {
    async list() {
        const spinner = (0, ora_1.default)('Loading workspaces...').start();
        try {
            const cloudos = (0, client_1.getCloudOS)();
            const workspaces = await cloudos.workspaces.list();
            spinner.stop();
            if (workspaces.length === 0) {
                console.log(chalk_1.default.yellow('No workspaces found'));
                return;
            }
            console.log(chalk_1.default.blue.bold('\n📁 Your Workspaces\n'));
            workspaces.forEach((workspace) => {
                const isDefault = workspace.id === config_1.config.get('defaultWorkspace');
                const marker = isDefault ? chalk_1.default.green('★') : ' ';
                console.log(`${marker} ${workspace.name} (${workspace.slug})`);
                console.log(chalk_1.default.gray(`   ID: ${workspace.id}`));
                console.log(chalk_1.default.gray(`   Plan: ${workspace.plan}\n`));
            });
        }
        catch (error) {
            spinner.fail(chalk_1.default.red('Failed to load workspaces'));
            console.error(chalk_1.default.red(error.message));
            process.exit(1);
        }
    },
    async create() {
        console.log(chalk_1.default.blue.bold('\n📁 Create New Workspace\n'));
        const answers = await inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Workspace name:',
                validate: (input) => input.length > 0 || 'Name is required',
            },
            {
                type: 'input',
                name: 'slug',
                message: 'Workspace slug:',
                validate: (input) => /^[a-z0-9-]+$/.test(input) || 'Only lowercase letters, numbers, and hyphens',
            },
        ]);
        const spinner = (0, ora_1.default)('Creating workspace...').start();
        try {
            const cloudos = (0, client_1.getCloudOS)();
            const workspace = await cloudos.workspaces.create(answers);
            spinner.succeed(chalk_1.default.green(`Created workspace: ${workspace.name}`));
            console.log(chalk_1.default.gray(`ID: ${workspace.id}`));
        }
        catch (error) {
            spinner.fail(chalk_1.default.red('Failed to create workspace'));
            console.error(chalk_1.default.red(error.message));
            process.exit(1);
        }
    },
    async delete(id) {
        const { confirm } = await inquirer_1.default.prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: chalk_1.default.yellow('Are you sure you want to delete this workspace?'),
                default: false,
            },
        ]);
        if (!confirm) {
            console.log(chalk_1.default.gray('Cancelled'));
            return;
        }
        const spinner = (0, ora_1.default)('Deleting workspace...').start();
        try {
            const cloudos = (0, client_1.getCloudOS)();
            await cloudos.workspaces.delete(id);
            spinner.succeed(chalk_1.default.green('Workspace deleted'));
        }
        catch (error) {
            spinner.fail(chalk_1.default.red('Failed to delete workspace'));
            console.error(chalk_1.default.red(error.message));
            process.exit(1);
        }
    },
};
