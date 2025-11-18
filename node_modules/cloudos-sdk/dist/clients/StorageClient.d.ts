import { AxiosInstance } from 'axios';
export declare class StorageClient {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Upload file
     */
    upload(file: File | Buffer, folder?: string): Promise<{
        key: string;
        url: string;
    }>;
    /**
     * Get signed URL for file
     */
    getSignedUrl(key: string, expiresIn?: number): Promise<string>;
    /**
     * Get signed upload URL
     */
    getSignedUploadUrl(filename: string, contentType: string, folder?: string): Promise<{
        url: string;
        key: string;
    }>;
    /**
     * Delete file
     */
    delete(key: string): Promise<void>;
}
