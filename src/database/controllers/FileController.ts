import { DataSource } from 'typeorm';
import { File as FileEntity } from '../entity/File';
import { BaseController } from '../utils/BaseController';
import { S3Manager } from './S3Manager';

export class FileController extends BaseController<FileEntity> {
	constructor(database: DataSource) {
		super(database, FileEntity);
	}

	async upload(file: File) {
		const data = await this.create({ minetype: file.type, name: file.name });

		const s3 = new S3Manager();
		await s3.uploadFile(data.id, data.minetype, new Uint8Array(await file.arrayBuffer()));

		return data;
	}

	override async list(page: number, limit?: number) {
		const data = await super.list(page, limit);

		const s3 = new S3Manager();
		return await Promise.all(
			data.map(async (file) => {
				const url = await s3.getFilePresignedUrl(file.id);
				return { ...file, url };
			}),
		);
	}
}
