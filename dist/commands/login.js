"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCommand = loginCommand;
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const cloudos_sdk_1 = require("cloudos-sdk");
const config_1 = require("../utils/config");
async function loginCommand() {
    console.log(chalk_1.default.blue.bold('\n🚀 CloudOS Login\n'));
    const answers = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'Email:',
            validate: (input) => input.includes('@') || 'Please enter a valid email',
        },
        {
            type: 'password',
            name: 'password',
            message: 'Password:',
            mask: '*',
        },
    ]);
    const spinner = (0, ora_1.default)('Logging in...').start();
    try {
        const cloudos = new cloudos_sdk_1.CloudOS({
            apiUrl: config_1.config.get('apiUrl') || 'http://localhost:3001/api',
        });
        const { token, user } = await cloudos.auth.login({
            email: answers.email,
            password: answers.password,
        });
        config_1.config.set('token', token);
        config_1.config.set('user', user);
        spinner.succeed(chalk_1.default.green(`Logged in as ${user.name} (${user.email})`));
        // Save default workspace if user has any
        if (user.workspaces && user.workspaces.length > 0) {
            config_1.config.set('defaultWorkspace', user.workspaces[0].id);
            console.log(chalk_1.default.gray(`Default workspace: ${user.workspaces[0].name}`));
        }
    }
    catch (error) {
        spinner.fail(chalk_1.default.red('Login failed'));
        console.error(chalk_1.default.red(error.message));
        process.exit(1);
    }
}
