'use server';

import { revalidateTag } from 'next/cache';
import { withDatabase } from '../database';
import { CategoryController } from '../database/controllers';
import { deleteCategorySchema } from '../util/schemas/deleteCategorySchema';

export const deleteCategory = async (data: FormData) => {
	const { categoryId } = deleteCategorySchema.parse(Object.fromEntries(data));

	const db = await withDatabase();

	await new CategoryController(db).delete(categoryId);

	revalidateTag('category');
};
