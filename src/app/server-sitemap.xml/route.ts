import type { NextRequest } from 'next/server';
import { getServerSideSitemap } from 'next-sitemap';
import { withDatabase } from '../../database';
import { VideoController } from '../../database/controllers';
import { MAX_POSITIVE_INTEGER } from '../../util/constants';

export async function GET(request: NextRequest) {
	const db = await withDatabase();
	const videoController = new VideoController(db);
	const videos = await videoController.list(1, MAX_POSITIVE_INTEGER);

	return getServerSideSitemap(
		videos.map((video) => ({
			loc: `${request.nextUrl.origin}/video/${video.id}`,
			lastmod: video.createdAt.toISOString(),
			changefreq: 'daily',
			priority: 0.7,
		})),
	);
}
