'use server';

import { revalidateTag } from 'next/cache';
import { withDatabase } from '../database';
import { UserController } from '../database/controllers';
import { userRolesSchema } from '../util/schemas/userRolesSchema';

export const updateUserAction = async (state: unknown, data: FormData) => {
	const formData = Object.fromEntries(data);
	const { role, userId } = userRolesSchema.parse(formData);

	const db = await withDatabase();

	const userController = new UserController(db);
	const user = await userController.update(userId, { role: { id: role } });

	revalidateTag('user');
	return user;
};
