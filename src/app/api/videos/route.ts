import { NextRequest, NextResponse } from 'next/server';
import { withDatabase } from 'src/database';
import { VideoController } from 'src/database/controllers';
import { PAGINATION_LIMIT } from 'src/util/constants';

export const GET = async (req: NextRequest) => {
	const searchParams = req.nextUrl.searchParams;
	const page = Number(searchParams.get('page') ?? '1');
	const limit = Number(searchParams.get('limit') ?? PAGINATION_LIMIT);

	const db = await withDatabase();
	const videos = await new VideoController(db).listAllWithUser(page, limit);

	return NextResponse.json(videos, { status: 200 });
};
