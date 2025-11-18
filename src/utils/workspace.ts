import { config } from './config';
import chalk from 'chalk';

export function getWorkspaceId(providedId?: string): string {
  const workspaceId = providedId || (config.get('defaultWorkspace') as string);

  if (!workspaceId) {
    console.error(chalk.red('No workspace specified'));
    console.log(chalk.gray('Use --workspace <id> or set a default workspace'));
    process.exit(1);
  }

  return workspaceId;
}

