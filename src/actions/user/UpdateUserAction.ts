'use server';

import { revalidatePath } from 'next/cache';
import { withDatabase } from '@/database';
import { UserController } from '@/database/controllers';

export const UpdateUserAction = async (data: FormData) => {
	const userId = data.get('userId');
	const userName = data.get('userName');

	const db = await withDatabase();

	if (!userId || !userName) {
		return;
	}

	const userController = new UserController(db);

	await userController.update(userId.toString(), {
		name: userName.toString(),
	});

	revalidatePath('./');
};
