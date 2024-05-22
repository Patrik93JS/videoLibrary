'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { object, string } from 'zod';
import { withDatabase } from '../database';
import { CategoryController } from '../database/controllers';

const FormDataSchema = object({
	name: string().min(3, { message: 'Must be # or more characters long' }),
});

export const createCategoryAction = async (data: FormData) => {
	const validateData = FormDataSchema.safeParse({
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
