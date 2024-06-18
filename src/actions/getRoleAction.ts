'use server';

import { RoleController } from '../database/controllers';
import { withDatabase } from '../database/index';

export const getRoleAction = async () => {
	const db = await withDatabase();
	const roleController = new RoleController(db);
	const roles = await roleController.list(1);

	return roles.map((role) => ({ ...role }));
};
