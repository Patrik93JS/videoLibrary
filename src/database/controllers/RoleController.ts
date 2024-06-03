import { DataSource } from 'typeorm';
import { UserRole } from '../../util/constants';
import { Role } from '../entity/Role';
import { BaseController } from '../utils/BaseController';

export class RoleController extends BaseController<Role> {
	constructor(database: DataSource) {
		super(database, Role);
	}

	async findByName(name: UserRole) {
		const role = await this.repository.findOne({ where: { name } });
		if (role) {
			return role;
		}
		return this.create({ name });
	}
}
