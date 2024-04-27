import { DataSource } from 'typeorm';
import { BaseController } from '@/database/utils/BaseController';
import { File } from '../entity/File';

export class FileController extends BaseController<File> {
	constructor(database: DataSource) {
		super(database, File);
	}
}
