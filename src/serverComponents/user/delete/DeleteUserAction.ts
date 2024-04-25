'use server';

import { UserController, withDatabase } from '@/database';
import { revalidatePath } from 'next/cache';

export const DeleteUserAction = async (data: FormData) => {
	const db = await withDatabase();
	const userId = data.get('userId');

	if (!userId) {
		return;
	}
	const result = await new UserController(db).delete(userId.toString());
	revalidatePath('./');
};
