#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const login_1 = require("./commands/login");
const logout_1 = require("./commands/logout");
const workspaces_1 = require("./commands/workspaces");
const apps_1 = require("./commands/apps");
const deploy_1 = require("./commands/deploy");
const logs_1 = require("./commands/logs");
const init_1 = require("./commands/init");
const program = new commander_1.Command();
program
    .name('cloudos')
    .description('CloudOS CLI - Manage your CloudOS workspace from the command line')
    .version('1.0.0');
// Auth commands
program
    .command('login')
    .description('Login to CloudOS')
    .action(login_1.loginCommand);
program
    .command('logout')
    .description('Logout from CloudOS')
    .action(logout_1.logoutCommand);
// Workspace commands
program
    .command('workspaces')
    .description('Manage workspaces')
    .action(workspaces_1.workspacesCommand.list);
program
    .command('workspaces:create')
    .description('Create a new workspace')
    .action(workspaces_1.workspacesCommand.create);
program
    .command('workspaces:delete <id>')
    .description('Delete a workspace')
    .action(workspaces_1.workspacesCommand.delete);
// App commands
program
    .command('apps')
    .description('List installed apps')
    .option('-w, --workspace <id>', 'Workspace ID')
    .action(apps_1.appsCommand.list);
program
    .command('apps:install <appId>')
    .description('Install an app')
    .option('-w, --workspace <id>', 'Workspace ID')
    .action(apps_1.appsCommand.install);
program
    .command('apps:uninstall <appId>')
    .description('Uninstall an app')
    .option('-w, --workspace <id>', 'Workspace ID')
    .action(apps_1.appsCommand.uninstall);
// Deploy commands
program
    .command('init')
    .description('Initialize a new CloudOS app')
    .action(init_1.initCommand);
program
    .command('deploy')
    .description('Deploy your app to CloudOS')
    .option('-w, --workspace <id>', 'Workspace ID')
    .action(deploy_1.deployCommand);
// Logs command
program
    .command('logs <appId>')
    .description('View app logs')
    .option('-w, --workspace <id>', 'Workspace ID')
    .option('-f, --follow', 'Follow log output')
    .option('-n, --lines <number>', 'Number of lines to show', '100')
    .action(logs_1.logsCommand);
program.parse();
