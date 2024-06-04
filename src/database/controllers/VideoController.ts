import { DataSource } from 'typeorm';
import { Video } from '../entity/Video';
import { BaseController } from '../utils/BaseController';

export class VideoController extends BaseController<Video> {
	constructor(database: DataSource) {
		super(database, Video);
	}

	listAllWithFiles(userId?: string) {
		return this.repository.find({ where: userId ? { user: { id: userId } } : undefined, relations: { files: true, user: true } });
	}

	listAllUsersId() {
		return this.repository.find({ relations: { user: true } });
	}
}
