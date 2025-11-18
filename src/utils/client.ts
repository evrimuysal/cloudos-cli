import { CloudOS } from 'cloudos-sdk';
import { config } from './config';
import chalk from 'chalk';

export function getCloudOS(): CloudOS {
  const token = config.get('token') as string;

  if (!token) {
    console.error(chalk.red('Not logged in'));
    console.log(chalk.gray('Run "cloudos login" first'));
    process.exit(1);
  }

  return new CloudOS({
    apiUrl: config.get('apiUrl') as string,
    token,
  });
}

