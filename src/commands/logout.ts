import chalk from 'chalk';
import { config } from '../utils/config';

export async function logoutCommand() {
  config.delete('token');
  config.delete('user');
  config.delete('defaultWorkspace');
  
  console.log(chalk.green('✓ Logged out successfully'));
}

