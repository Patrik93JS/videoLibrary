'use server';

import { UserController } from '../database/controllers';
import { withDatabase } from '../database/index';
import { usersListLength } from '../util/constants';

export const getUserAction = async () => {
	const db = await withDatabase();
	const userController = new UserController(db);
	const users = await userController.list(1, usersListLength);

	return users.map((user) => ({ ...user, role: { ...user.role } }));
};
