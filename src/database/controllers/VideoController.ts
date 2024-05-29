import { DataSource } from 'typeorm';
import { Video } from '../entity/Video';
import { BaseController } from '../utils/BaseController';

export class VideoController extends BaseController<Video> {
	constructor(database: DataSource) {
		super(database, Video);
	}
}
