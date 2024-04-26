import { DataSource } from 'typeorm';
import { BaseController } from '@/database/utils/BaseController';
import { Category } from '../entity';

export class CategoryController extends BaseController<Category> {
	constructor(database: DataSource) {
		super(database, Category);
	}
}
