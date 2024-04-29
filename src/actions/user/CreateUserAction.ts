'use server';

import { revalidatePath } from 'next/cache';
import { object, string } from 'zod';
import { withDatabase } from '@/database';
import { UserController } from '@/database/controllers';

const FormDataSchema = object({
	email: string().email({ message: 'Invalid email address' }),
	password: string().min(6, { message: 'Must be 6 or more characters long' }).regex(/[A-Z]/, 'Must has at least one Upper letter'),
	userName: string().min(3, { message: 'Must be 3 or more characters long' }),
});

export const CreateUserAction = async (data: FormData) => {
	try {
		const validatedData = FormDataSchema.parse(data);

		const { email, password, userName } = validatedData;
		const db = await withDatabase();

		await new UserController(db).create({
			email: String(email),
			password: String(password),
			name: String(userName),
		});
		revalidatePath('./');
	} catch (error) {
		console.error('Chyba pri validaci');
	}
};
