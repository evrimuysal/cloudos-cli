"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageClient = void 0;
class StorageClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Upload file
     */
    async upload(file, folder) {
        const formData = new FormData();
        formData.append('file', file);
        const { data } = await this.client.post('/storage/upload', formData, {
            params: { folder },
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return data;
    }
    /**
     * Get signed URL for file
     */
    async getSignedUrl(key, expiresIn) {
        const { data } = await this.client.get('/storage/signed-url', {
            params: { key, expiresIn },
        });
        return data.url;
    }
    /**
     * Get signed upload URL
     */
    async getSignedUploadUrl(filename, contentType, folder) {
        const { data } = await this.client.get('/storage/signed-upload-url', {
            params: { filename, contentType, folder },
        });
        return data;
    }
    /**
     * Delete file
     */
    async delete(key) {
        await this.client.delete(`/storage/${key}`);
    }
}
exports.StorageClient = StorageClient;
