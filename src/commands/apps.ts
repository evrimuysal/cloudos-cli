import chalk from 'chalk';
import ora from 'ora';
import { getCloudOS } from '../utils/client';
import { getWorkspaceId } from '../utils/workspace';

export const appsCommand = {
  async list(options: any) {
    const workspaceId = getWorkspaceId(options.workspace);
    const spinner = ora('Loading apps...').start();

    try {
      const cloudos = getCloudOS();
      const apps = await cloudos.apps.listInstalled(workspaceId);

      spinner.stop();

      if (apps.length === 0) {
        console.log(chalk.yellow('No apps installed'));
        return;
      }

      console.log(chalk.blue.bold('\n📱 Installed Apps\n'));

      apps.forEach((app) => {
        console.log(`${app.name}`);
        console.log(chalk.gray(`  ID: ${app.id}`));
        console.log(chalk.gray(`  Type: ${app.type}\n`));
      });
    } catch (error: any) {
      spinner.fail(chalk.red('Failed to load apps'));
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  },

  async install(appId: string, options: any) {
    const workspaceId = getWorkspaceId(options.workspace);
    const spinner = ora('Installing app...').start();

    try {
      const cloudos = getCloudOS();
      const app = await cloudos.apps.install(workspaceId, appId);

      spinner.succeed(chalk.green(`Installed ${app.name}`));
    } catch (error: any) {
      spinner.fail(chalk.red('Failed to install app'));
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  },

  async uninstall(appId: string, options: any) {
    const workspaceId = getWorkspaceId(options.workspace);
    const spinner = ora('Uninstalling app...').start();

    try {
      const cloudos = getCloudOS();
      await cloudos.apps.uninstall(workspaceId, appId);

      spinner.succeed(chalk.green('App uninstalled'));
    } catch (error: any) {
      spinner.fail(chalk.red('Failed to uninstall app'));
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  },
};

