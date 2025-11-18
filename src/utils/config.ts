import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

const configDir = path.join(os.homedir(), '.config', 'cloudos-cli');
const configFile = path.join(configDir, 'config.json');

// Ensure config directory exists
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

// Default config
const defaults = {
  apiUrl: 'http://localhost:3001/api',
};

function loadConfig() {
  try {
    if (fs.existsSync(configFile)) {
      const data = fs.readFileSync(configFile, 'utf8');
      return { ...defaults, ...JSON.parse(data) };
    }
  } catch (error) {
    // Ignore errors, return defaults
  }
  return defaults;
}

function saveConfig(data: any) {
  try {
    fs.writeFileSync(configFile, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Failed to save config:', error);
  }
}

export const config = {
  get(key: string) {
    const data = loadConfig();
    return data[key];
  },
  set(key: string, value: any) {
    const data = loadConfig();
    data[key] = value;
    saveConfig(data);
  },
  delete(key: string) {
    const data = loadConfig();
    delete data[key];
    saveConfig(data);
  },
};

