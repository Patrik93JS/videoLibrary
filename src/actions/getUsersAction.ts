'use server';

import { withDatabase } from '../database';
import { UserController } from '../database/controllers';
import { usersListLength } from '../util/constants';

export const getUserAction = async () => {
	const db = await withDatabase();
	const userController = new UserController(db);
	const users = await userController.list(1, usersListLength);

	return users.map((user) => ({ ...user, role: { ...user.role } }));
};
