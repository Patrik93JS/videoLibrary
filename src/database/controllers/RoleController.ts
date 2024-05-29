import { DataSource } from 'typeorm';
import { Role } from '../entity/Role';
import { BaseController } from '../utils/BaseController';

export class RoleController extends BaseController<Role> {
	constructor(database: DataSource) {
		super(database, Role);
	}
}
