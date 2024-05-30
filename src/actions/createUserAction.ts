'use server';

import { currentUser } from '@clerk/nextjs/server';
import { revalidateTag } from 'next/cache';
import { withDatabase } from '../database';
import { UserController } from '../database/controllers';

export const createUserAction = async () => {
	const db = await withDatabase();
	const user = await currentUser();

	const userName = user?.firstName;
	const clerkId = user?.id;
	const userEmail = user?.emailAddresses[0].emailAddress;
	if (!userName || !userEmail || !clerkId) return;

	const userController = new UserController(db);
	const existingUser = await userController.findByClerkId(clerkId);
	if (existingUser) {
		revalidateTag('user-exists');
		return existingUser;
	}

	const result = await userController.create({
		name: userName,
		email: userEmail,
		clerkId: clerkId,
		role: { name: 'user' },
	});

	revalidateTag('result');
	return result;
};
