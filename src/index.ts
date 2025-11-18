#!/usr/bin/env node

import { Command } from 'commander';
import { loginCommand } from './commands/login';
import { logoutCommand } from './commands/logout';
import { workspacesCommand } from './commands/workspaces';
import { appsCommand } from './commands/apps';
import { deployCommand } from './commands/deploy';
import { logsCommand } from './commands/logs';
import { initCommand } from './commands/init';

const program = new Command();

program
  .name('cloudos')
  .description('CloudOS CLI - Manage your CloudOS workspace from the command line')
  .version('1.0.0');

// Auth commands
program
  .command('login')
  .description('Login to CloudOS')
  .action(loginCommand);

program
  .command('logout')
  .description('Logout from CloudOS')
  .action(logoutCommand);

// Workspace commands
program
  .command('workspaces')
  .description('Manage workspaces')
  .action(workspacesCommand.list);

program
  .command('workspaces:create')
  .description('Create a new workspace')
  .action(workspacesCommand.create);

program
  .command('workspaces:delete <id>')
  .description('Delete a workspace')
  .action(workspacesCommand.delete);

// App commands
program
  .command('apps')
  .description('List installed apps')
  .option('-w, --workspace <id>', 'Workspace ID')
  .action(appsCommand.list);

program
  .command('apps:install <appId>')
  .description('Install an app')
  .option('-w, --workspace <id>', 'Workspace ID')
  .action(appsCommand.install);

program
  .command('apps:uninstall <appId>')
  .description('Uninstall an app')
  .option('-w, --workspace <id>', 'Workspace ID')
  .action(appsCommand.uninstall);

// Deploy commands
program
  .command('init')
  .description('Initialize a new CloudOS app')
  .action(initCommand);

program
  .command('deploy')
  .description('Deploy your app to CloudOS')
  .option('-w, --workspace <id>', 'Workspace ID')
  .action(deployCommand);

// Logs command
program
  .command('logs <appId>')
  .description('View app logs')
  .option('-w, --workspace <id>', 'Workspace ID')
  .option('-f, --follow', 'Follow log output')
  .option('-n, --lines <number>', 'Number of lines to show', '100')
  .action(logsCommand);

program.parse();

