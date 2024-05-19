import { DataSource } from 'typeorm';
import { User } from '../entity/User';
import { BaseController } from '../utils/BaseController';

export class UserController extends BaseController<User> {
	constructor(database: DataSource) {
		super(database, User);
	}
}
