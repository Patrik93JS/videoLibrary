import { DataSource } from 'typeorm';
import { BaseController } from '@/database/utils/BaseController';
import { File } from '../entity';

export class FileController extends BaseController<File> {
	constructor(database: DataSource) {
		super(database, File);
	}
}
