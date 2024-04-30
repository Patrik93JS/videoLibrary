import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { bucket } from '@/database';

export class S3Manager {
	private s3: S3Client;

	constructor() {
		this.s3 = new S3Client({
			endpoint: 'http://localhost:9000',
			forcePathStyle: true,
			region: 'eu-central-1',
			credentials: {
				accessKeyId: 'root',
				secretAccessKey: 'rootroot',
			},
		});
	}

	async uploadFile(key: string, mimeType: string, body: Uint8Array | ReadableStream<Uint8Array>) {
		const upload = new PutObjectCommand({
			Bucket: bucket,
			Key: key,
			Body: body,
			CacheControl: 'public, max-age=31536000',
			ContentType: mimeType,
		});

		try {
			return await this.s3.send(upload);
		} catch (error) {
			console.error('Error uploading file:', error);
			return;
		}
	}

	async getFilePresignedUrl(keyToFetch: string) {
		const command = new GetObjectCommand({
			Bucket: bucket,
			Key: keyToFetch,
		});

		try {
			return await getSignedUrl(this.s3, command, { expiresIn: 300 });
		} catch (error) {
			console.error('Error getting presigned URL:', error);
			return;
		}
	}

	async downloadFile(key: string) {
		const download = new GetObjectCommand({
			Bucket: bucket,
			Key: key,
		});

		try {
			return await this.s3.send(download);
		} catch (error) {
			console.error('Error downloading file:', error);
			return;
		}
	}
}
