import { z } from 'zod';

export const userRolesSchema = z.object({
	userId: z.string().uuid(),
	role: z.string().uuid(),
});
