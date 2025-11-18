"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCommand = initCommand;
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function initCommand() {
    console.log(chalk_1.default.blue.bold('\n🎉 Initialize CloudOS App\n'));
    const answers = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'App name:',
            default: path_1.default.basename(process.cwd()),
        },
        {
            type: 'input',
            name: 'slug',
            message: 'App slug:',
            default: (answers) => answers.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
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
    const configPath = path_1.default.join(process.cwd(), 'cloudos.config.json');
    fs_1.default.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log(chalk_1.default.green('\n✓ Created cloudos.config.json'));
    console.log(chalk_1.default.gray('You can now deploy your app with: cloudos deploy'));
}
