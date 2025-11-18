import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { getCloudOS } from '../utils/client';
import { config } from '../utils/config';

export const workspacesCommand = {
  async list() {
    const spinner = ora('Loading workspaces...').start();

    try {
      const cloudos = getCloudOS();
      const workspaces = await cloudos.workspaces.list();

      spinner.stop();

      if (workspaces.length === 0) {
        console.log(chalk.yellow('No workspaces found'));
        return;
      }

      console.log(chalk.blue.bold('\n📁 Your Workspaces\n'));

      workspaces.forEach((workspace) => {
        const isDefault = workspace.id === config.get('defaultWorkspace');
        const marker = isDefault ? chalk.green('★') : ' ';
        console.log(`${marker} ${workspace.name} (${workspace.slug})`);
        console.log(chalk.gray(`   ID: ${workspace.id}`));
        console.log(chalk.gray(`   Plan: ${workspace.plan}\n`));
      });
    } catch (error: any) {
      spinner.fail(chalk.red('Failed to load workspaces'));
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  },

  async create() {
    console.log(chalk.blue.bold('\n📁 Create New Workspace\n'));

    const answers = await inquirer.prompt([
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
        validate: (input) => 
          /^[a-z0-9-]+$/.test(input) || 'Only lowercase letters, numbers, and hyphens',
      },
    ]);

    const spinner = ora('Creating workspace...').start();

    try {
      const cloudos = getCloudOS();
      const workspace = await cloudos.workspaces.create(answers);

      spinner.succeed(chalk.green(`Created workspace: ${workspace.name}`));
      console.log(chalk.gray(`ID: ${workspace.id}`));
    } catch (error: any) {
      spinner.fail(chalk.red('Failed to create workspace'));
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  },

  async delete(id: string) {
    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: chalk.yellow('Are you sure you want to delete this workspace?'),
        default: false,
      },
    ]);

    if (!confirm) {
      console.log(chalk.gray('Cancelled'));
      return;
    }

    const spinner = ora('Deleting workspace...').start();

    try {
      const cloudos = getCloudOS();
      await cloudos.workspaces.delete(id);

      spinner.succeed(chalk.green('Workspace deleted'));
    } catch (error: any) {
      spinner.fail(chalk.red('Failed to delete workspace'));
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  },
};

