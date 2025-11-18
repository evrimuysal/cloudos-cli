# @cloudos/cli

CloudOS Command Line Interface - Manage your CloudOS workspace from the terminal.

## Installation

```bash
npm install -g @cloudos/cli
```

## Quick Start

```bash
# Login
cloudos login

# List workspaces
cloudos workspaces

# Create workspace
cloudos workspaces:create

# List apps
cloudos apps --workspace <workspace-id>

# Install app
cloudos apps:install <app-id> --workspace <workspace-id>

# Initialize new app
cloudos init

# Deploy app
cloudos deploy

# View logs
cloudos logs <app-id> --workspace <workspace-id>
```

## Commands

### Authentication

```bash
# Login to CloudOS
cloudos login

# Logout
cloudos logout
```

### Workspaces

```bash
# List your workspaces
cloudos workspaces

# Create a new workspace
cloudos workspaces:create

# Delete a workspace
cloudos workspaces:delete <workspace-id>
```

### Apps

```bash
# List installed apps
cloudos apps --workspace <workspace-id>

# Install an app
cloudos apps:install <app-id> --workspace <workspace-id>

# Uninstall an app
cloudos apps:uninstall <app-id> --workspace <workspace-id>
```

### Development

```bash
# Initialize a new CloudOS app
cloudos init

# Deploy your app
cloudos deploy --workspace <workspace-id>

# View app logs
cloudos logs <app-id> --workspace <workspace-id>

# Follow logs in real-time
cloudos logs <app-id> --workspace <workspace-id> --follow

# Show last 50 lines
cloudos logs <app-id> --workspace <workspace-id> --lines 50
```

## Configuration

The CLI stores configuration in `~/.config/cloudos-cli/`:

```json
{
  "apiUrl": "https://api.cloudos.io",
  "token": "your-auth-token",
  "defaultWorkspace": "workspace-id"
}
```

## App Configuration

Create a `cloudos.config.json` in your app directory:

```json
{
  "name": "My App",
  "slug": "my-app",
  "description": "My awesome CloudOS app",
  "type": "spa",
  "version": "1.0.0",
  "permissions": [
    "storage:read",
    "storage:write",
    "notifications:send"
  ],
  "routes": {
    "/": "index.html",
    "/api/*": "serverless"
  }
}
```

## Examples

### Login and Setup

```bash
# Login
cloudos login
# Enter your email and password

# List workspaces
cloudos workspaces
# ★ My Company (my-company)
#    ID: workspace-123
#    Plan: business
```

### Create and Deploy App

```bash
# Create new app directory
mkdir my-app && cd my-app

# Initialize app
cloudos init
# Answer prompts...

# Deploy app
cloudos deploy --workspace workspace-123
```

### Manage Apps

```bash
# List marketplace apps (coming soon)
cloudos marketplace

# Install app
cloudos apps:install calculator --workspace workspace-123

# View logs
cloudos logs calculator --workspace workspace-123 --follow
```

## License

MIT

