import { DataSource } from 'typeorm';
import { PAGINATION_LIMIT } from '../../util/constants';
import { Video } from '../entity/Video';
import { BaseController } from '../utils/BaseController';

export class VideoController extends BaseController<Video> {
	constructor(database: DataSource) {
		super(database, Video);
	}

	listAllByUser(userId?: string, page?: number, limit = PAGINATION_LIMIT) {
		if (!page)
			return this.repository.find({ where: userId ? { user: { id: userId } } : undefined, relations: { files: true, user: true } });
		const skip = (page - 1) * limit;
		return this.repository.find({
			where: userId ? { user: { id: userId } } : undefined,
			relations: { files: true, user: true },
			skip,
			take: limit,
		});
	}

	listAllWithUser(page: number, limit = PAGINATION_LIMIT) {
		const skip = (page - 1) * limit;
		return this.repository.find({ relations: { user: true }, skip, take: limit });
	}
}
