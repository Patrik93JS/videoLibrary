import { type NextRequest, NextResponse } from 'next/server';
import { withDatabase } from 'src/database';
import { VideoController } from 'src/database/controllers';

export const GET = async (req: NextRequest, { params: { videoId } }: { params: { videoId: string } }) => {
	const db = await withDatabase();
	const video = await new VideoController(db).findById(videoId);

	if (!video) return NextResponse.json({}, { status: 404, statusText: 'video not found' });

	return NextResponse.json({ video });
};
