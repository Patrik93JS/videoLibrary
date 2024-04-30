'use server';

import { revalidatePath } from 'next/cache';
import { withDatabase } from '@/database';
import { UserController } from '@/database/controllers';

export const UpdateUserAction = async (data: FormData) => {
	try {
		const userId = data.get('userId');
		const user = data.get('user');

		const db = await withDatabase();

		if (!userId || !user) {
			return;
		}

		const userController = new UserController(db);

		await userController.update(userId.toString(), {
			name: user.toString(),
		});

		revalidatePath('./');
	} catch (error) {
		console.error('chyba pri validaci update');
	}
};
