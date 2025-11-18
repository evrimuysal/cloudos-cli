# @cloudos/sdk

Official JavaScript/TypeScript SDK for CloudOS Platform.

## Installation

```bash
npm install @cloudos/sdk
# or
yarn add @cloudos/sdk
# or
pnpm add @cloudos/sdk
```

## Quick Start

```typescript
import { CloudOS } from '@cloudos/sdk';

// Initialize SDK
const cloudos = new CloudOS({
  apiUrl: 'https://api.cloudos.io',
  token: 'your-api-token', // Optional
});

// Login
const { token, user } = await cloudos.auth.login({
  email: 'user@example.com',
  password: 'password',
});

// Set token
cloudos.setToken(token);

// Get current user
const currentUser = await cloudos.auth.getCurrentUser();

// List workspaces
const workspaces = await cloudos.workspaces.list();

// Create workspace
const workspace = await cloudos.workspaces.create({
  name: 'My Workspace',
  slug: 'my-workspace',
});

// Install app
await cloudos.apps.install(workspace.id, 'app-id');
```

## API Reference

### Authentication

```typescript
// Login
const { token, user } = await cloudos.auth.login({
  email: 'user@example.com',
  password: 'password',
});

// Register
const { token, user } = await cloudos.auth.register({
  email: 'user@example.com',
  password: 'password',
  name: 'John Doe',
});

// Get current user
const user = await cloudos.auth.getCurrentUser();

// Logout
await cloudos.auth.logout();
```

### Workspaces

```typescript
// List workspaces
const workspaces = await cloudos.workspaces.list();

// Get workspace
const workspace = await cloudos.workspaces.get('workspace-id');

// Create workspace
const workspace = await cloudos.workspaces.create({
  name: 'My Workspace',
  slug: 'my-workspace',
});

// Update workspace
await cloudos.workspaces.update('workspace-id', {
  name: 'Updated Name',
});

// Delete workspace
await cloudos.workspaces.delete('workspace-id');

// Workspace members
const members = await cloudos.workspaces.getMembers('workspace-id');

// Invite member
await cloudos.workspaces.inviteMember('workspace-id', 'email@example.com', 'member');

// Update member role
await cloudos.workspaces.updateMemberRole('workspace-id', 'user-id', 'admin');

// Remove member
await cloudos.workspaces.removeMember('workspace-id', 'user-id');
```

### Apps

```typescript
// List marketplace apps
const apps = await cloudos.apps.listMarketplace();

// Get app details
const app = await cloudos.apps.getMarketplaceApp('app-id');

// List installed apps
const installedApps = await cloudos.apps.listInstalled('workspace-id');

// Install app
await cloudos.apps.install('workspace-id', 'app-id');

// Uninstall app
await cloudos.apps.uninstall('workspace-id', 'app-id');

// Update app permissions
await cloudos.apps.updatePermissions('workspace-id', 'app-id', permissions);
```

### Storage

```typescript
// Upload file
const { key, url } = await cloudos.storage.upload(file, 'folder-name');

// Get signed URL
const signedUrl = await cloudos.storage.getSignedUrl('file-key');

// Get signed upload URL
const { url, key } = await cloudos.storage.getSignedUploadUrl(
  'filename.jpg',
  'image/jpeg',
  'avatars'
);

// Delete file
await cloudos.storage.delete('file-key');
```

### Analytics

```typescript
// Get workspace analytics
const analytics = await cloudos.analytics.getWorkspaceAnalytics('workspace-id', '7d');

// Get app usage stats
const stats = await cloudos.analytics.getAppUsageStats('workspace-id', 'app-id');
```

### Notifications

```typescript
// List notifications
const notifications = await cloudos.notifications.list();

// Mark as read
await cloudos.notifications.markAsRead('notification-id');

// Mark all as read
await cloudos.notifications.markAllAsRead();
```

### Webhooks

```typescript
// List webhooks
const webhooks = await cloudos.webhooks.list('workspace-id');

// Create webhook
const webhook = await cloudos.webhooks.create('workspace-id', {
  url: 'https://example.com/webhook',
  events: ['app.installed', 'member.joined'],
});

// Update webhook
await cloudos.webhooks.update('workspace-id', 'webhook-id', {
  enabled: false,
});

// Delete webhook
await cloudos.webhooks.delete('workspace-id', 'webhook-id');

// Test webhook
await cloudos.webhooks.test('workspace-id', 'webhook-id');
```

## Error Handling

```typescript
import { CloudOSError, AuthenticationError, NotFoundError } from '@cloudos/sdk';

try {
  await cloudos.auth.login({ email, password });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Login failed:', error.message);
  } else if (error instanceof NotFoundError) {
    console.error('Resource not found:', error.message);
  } else if (error instanceof CloudOSError) {
    console.error('API error:', error.statusCode, error.message);
  }
}
```

## TypeScript Support

The SDK is written in TypeScript and includes type definitions out of the box.

```typescript
import type { User, Workspace, App } from '@cloudos/sdk';

const user: User = await cloudos.auth.getCurrentUser();
const workspace: Workspace = await cloudos.workspaces.get('id');
```

## License

MIT

