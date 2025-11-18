import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

export async function initCommand() {
  console.log(chalk.blue.bold('\n🎉 Initialize CloudOS App\n'));

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'App name:',
      default: path.basename(process.cwd()),
    },
    {
      type: 'input',
      name: 'slug',
      message: 'App slug:',
      default: (answers: any) =>
        answers.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description:',
      default: 'My CloudOS app',
    },
    {
      type: 'list',
      name: 'type',
      message: 'App type:',
      choices: ['spa', 'iframe', 'native'],
      default: 'spa',
    },
    {
      type: 'input',
      name: 'version',
      message: 'Version:',
      default: '1.0.0',
    },
  ]);

  const config = {
    name: answers.name,
    slug: answers.slug,
    description: answers.description,
    type: answers.type,
    version: answers.version,
    permissions: [],
    routes: {
      '/': 'index.html',
    },
  };

  const configPath = path.join(process.cwd(), 'cloudos.config.json');
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  console.log(chalk.green('\n✓ Created cloudos.config.json'));
  console.log(chalk.gray('You can now deploy your app with: cloudos deploy'));
}

