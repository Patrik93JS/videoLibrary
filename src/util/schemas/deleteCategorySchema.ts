import { z } from 'zod';

export const deleteCategorySchema = z.object({
	categoryId: z.string(),
});
