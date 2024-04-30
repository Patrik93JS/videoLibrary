import { DataSource, ObjectType, Repository } from 'typeorm';
import { CommonEntity } from '@/database/utils/CommonEntity';
import { PAGINATION_LIMIT } from '@/util/constants';

export abstract class BaseController<Entity extends CommonEntity> {
	protected repository: Repository<Entity>;

	constructor(database: DataSource, entity: ObjectType<Entity>) {
		this.repository = database.getRepository(entity);
	}

	async findById(id: Entity['id']) {
		return this.repository.findOne({
			// @ts-expect-error id has to exists because we are extending CommonEntity
			where: { id },
		});
	}

	async create(...props: Parameters<(typeof this.repository)['save']>) {
		return this.repository.save(...props);
	}

	async update(id: Entity['id'], props: Parameters<(typeof this.repository)['update']>[1]) {
		// @ts-expect-error id has to exists because we are extending CommonEntity
		return this.repository.update({ id }, props);
	}

	async delete(id: Entity['id']) {
		// @ts-expect-error id has to exists because we are extending CommonEntity
		return this.repository.delete({ id });
	}

	async list(page: number, limit = PAGINATION_LIMIT) {
		const skip = (page - 1) * limit;

		return this.repository.find({
			skip,
			take: limit,
		});
	}
}
