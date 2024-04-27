import { DataSource } from 'typeorm';
import { BaseController } from '@/database/utils/BaseController';
import { Video } from '../entity/Video';

export class VideoController extends BaseController<Video> {
	constructor(database: DataSource) {
		super(database, Video);
	}
}
