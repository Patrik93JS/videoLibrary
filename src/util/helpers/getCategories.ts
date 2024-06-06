'use server';
import { withDatabase } from 'src/database';
import { CategoryController } from 'src/database/controllers';

export const getCategories = async () => {
	const db = await withDatabase();
	const categoryController = new CategoryController(db);
	const data = await categoryController.list(1, 355);
	return data;
};
