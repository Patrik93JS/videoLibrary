'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { withDatabase } from '../database';
import { CategoryController } from '../database/controllers';
import { createCategorySchema } from '../util/schemas/createCategorySchema';

export const createCategoryAction = async (state: unknown, data: FormData) => {
	const validateData = createCategorySchema.safeParse({
		name: data.get('name'),
	});
	if (!validateData.success) return;

	const db = await withDatabase();

	await new CategoryController(db).create({
		name: validateData.data?.name,
		video: undefined,
	});

	revalidateTag('./');
	redirect('/');
};
