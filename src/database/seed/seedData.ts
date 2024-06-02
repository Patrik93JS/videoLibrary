import { roles } from '../../util/constants';
import { withDatabase } from '..';
import { RoleController } from '../controllers';

export const seedData = async () => {
	const db = await withDatabase();
	const roleController = new RoleController(db);

	await Promise.all(roles.map((role) => roleController.findByName(role)));
};
