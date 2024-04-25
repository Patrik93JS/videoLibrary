import { DataSource } from "typeorm";
import { User } from "../entity";
import { BaseController } from "@/database/utils/BaseController";

export class UserController extends BaseController<User> {
	constructor(database: DataSource) {
		super(database, User);
	}
}
