'use server';

import { withDatabase } from '../database';
import { CategoryController } from '../database/controllers';

export async function fetchCategoriesAction() {
	const db = await withDatabase();
	const categoryController = new CategoryController(db);
	const categories = await categoryController.list(1, 355);

	return { categories };
}
