import { DataSource } from 'typeorm';
import { BaseController } from '@/database/utils/BaseController';
import { Role } from '../entity/Role';

export class RoleController extends BaseController<Role> {
	constructor(database: DataSource) {
		super(database, Role);
	}
}
