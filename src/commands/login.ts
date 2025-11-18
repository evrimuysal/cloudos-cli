import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { CloudOS } from '@cloudos/sdk';
import { config } from '../utils/config';

export async function loginCommand() {
  console.log(chalk.blue.bold('\n🚀 CloudOS Login\n'));

  const answers = await inquirer.prompt([
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

  const spinner = ora('Logging in...').start();

  try {
    const cloudos = new CloudOS({
      apiUrl: config.get('apiUrl') || 'http://localhost:3001/api',
    });

    const { token, user } = await cloudos.auth.login({
      email: answers.email,
      password: answers.password,
    });

    config.set('token', token);
    config.set('user', user);

    spinner.succeed(chalk.green(`Logged in as ${user.name} (${user.email})`));
    
    // Save default workspace if user has any
    if (user.workspaces && user.workspaces.length > 0) {
      config.set('defaultWorkspace', user.workspaces[0].id);
      console.log(chalk.gray(`Default workspace: ${user.workspaces[0].name}`));
    }
  } catch (error: any) {
    spinner.fail(chalk.red('Login failed'));
    console.error(chalk.red(error.message));
    process.exit(1);
  }
}

