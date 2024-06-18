import { roles } from '../../util/constants';
import { RoleController } from '../controllers';
import { withDatabase } from '../index';

export const seedData = async () => {
	const db = await withDatabase();
	const roleController = new RoleController(db);

	await Promise.all(roles.map((role) => roleController.findByName(role)));
};
