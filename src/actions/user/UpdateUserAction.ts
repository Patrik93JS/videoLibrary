'use server';

import { revalidatePath } from 'next/cache';
import { object, string } from 'zod';
import { withDatabase } from '@/database';
import { UserController } from '@/database/controllers';

const FormDataSchema = object({
	userName: string().min(3, { message: 'Must be 3 or more characters long' }),
});

export const UpdateUserAction = async (data: FormData) => {
	try {
		const userId = data.get('userId');
		const userName = FormDataSchema;

		const db = await withDatabase();

		if (!userId || !userName) {
			return;
		}

		const userController = new UserController(db);

		await userController.update(userId.toString(), {
			name: userName.toString(),
		});

		revalidatePath('./');
	} catch (error) {
		console.error('chyba pri validaci update');
	}
};
