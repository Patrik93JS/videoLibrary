import { z } from 'zod';

export const createCategorySchema = z.object({
	name: z.string().min(3, { message: 'Must be 3 or more characters long' }),
});
