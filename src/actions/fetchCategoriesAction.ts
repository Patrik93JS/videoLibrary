'use server';
import { CategoryController } from '../database/controllers';
import { withDatabase } from '../database/index';
import { categoryListLenght } from '../util/constants';

export const fetchCategoriesAction = async () => {
	const db = await withDatabase();
	const categoryController = new CategoryController(db);
	const categories = await categoryController.list(1, categoryListLenght);

	return categories.map((category) => ({ ...category }));
};
