import { DataSource } from 'typeorm';
import { BaseController } from '@/database/utils/BaseController';
import { User } from '../entity/User';

export class UserController extends BaseController<User> {
	constructor(database: DataSource) {
		super(database, User);
	}
}
