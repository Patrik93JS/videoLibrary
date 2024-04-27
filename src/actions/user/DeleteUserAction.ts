'use server';

import { revalidatePath } from 'next/cache';
import { withDatabase } from '@/database';
import { UserController } from '@/database/controllers';

export const DeleteUserAction = async (data: FormData) => {
	const db = await withDatabase();
	const userId = data.get('userId');

	if (!userId) {
		return;
	}

	await new UserController(db).delete(userId.toString());
	revalidatePath('./');
};
