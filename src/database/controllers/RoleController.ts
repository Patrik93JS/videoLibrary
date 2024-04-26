import { DataSource } from 'typeorm';
import { BaseController } from '@/database/utils/BaseController';
import { Role } from '../entity';

export class RoleController extends BaseController<Role> {
	constructor(database: DataSource) {
		super(database, Role);
	}
}
