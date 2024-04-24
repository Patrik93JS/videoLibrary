import { Request, Response } from "express";
import {
	DataSource,
	getRepository,
	ObjectType,
	Repository,
} from "typeorm";
import { CommonEntity } from "@/database/utils/CommonEntity";

export abstract class BaseController<
	Entity extends CommonEntity
> {
	protected repository: Repository<Entity>;

	constructor(
		database: DataSource,
		entity: ObjectType<Entity>
	) {
		this.repository =
			database.getRepository(entity);
	}

	async findById(id: Entity["id"]) {
		return this.repository.findOne({
			// @ts-expect-error id has to exists because we are extending CommonEntity
			where: { id },
		});
	}

	async create(
		...props: Parameters<
			(typeof this.repository)["save"]
		>
	) {
		return this.repository.save(...props);
	}

	async update(
		...props: Parameters<
			(typeof this.repository)["update"]
		>
	) {
		return this.repository.update(...props);
	}

	async delete(
		...props: Parameters<
			(typeof this.repository)["delete"]
		>
	) {
		return this.repository.delete(...props);
	}

	// FIXME: implement me
	async list() {
		return this.repository.find();
	}

	/**
	 * (page:number, limit:number)
	 *
	 * this.repository.find({take: 10, skip:0})
	 *
	 *
	 */
}
