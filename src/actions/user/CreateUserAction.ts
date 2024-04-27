'use server';

import { revalidatePath } from 'next/cache';
import { withDatabase } from '@/database';
import { UserController } from '@/database/controllers';

export const CreateUserAction = async (data: FormData) => {
	const email = data.get('email');
	const password = data.get('password');
	const userName = data.get('userName');

	const db = await withDatabase();

	await new UserController(db).create({
		email: String(email),
		password: String(password),
		name: String(userName),
	});

	revalidatePath('./');
};
