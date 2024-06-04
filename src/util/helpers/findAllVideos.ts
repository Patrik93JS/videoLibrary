import { withDatabase } from '../../database';
import { VideoController } from '../../database/controllers';

export const findAllVideos = async () => {
	const db = await withDatabase();
	const videoController = new VideoController(db);

	const videoData = (await videoController.list(1)).join('files');
};
