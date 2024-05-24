'use server';
import { withDatabase } from '../database';
import { CategoryController } from '../database/controllers';
import { categoryListLenght } from '../util/constants';

export const fetchCategoriesAction = async () => {
	const db = await withDatabase();
	const categoryController = new CategoryController(db);
	const categories = await categoryController.list(1, categoryListLenght);

	return categories.map((category) => ({ ...category }));
};
