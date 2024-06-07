import { z } from 'zod';

export const deleteVideoSchema = z.object({
	videoId: z.string(),
});
