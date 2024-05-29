import { DataSource } from 'typeorm';
import { Category } from '../entity/Category';
import { BaseController } from '../utils/BaseController';

export class CategoryController extends BaseController<Category> {
	constructor(database: DataSource) {
		super(database, Category);
	}
}
