'use server';

import { currentUser } from '@clerk/nextjs/server';
import { revalidateTag } from 'next/cache';
import { withDatabase } from '../database';
import { UserController } from '../database/controllers';

export const getCurrentUserAction = async () => {
	const clerkUser = await currentUser();
	if (!clerkUser) {
		throw new Error('User not found');
	}

	const db = await withDatabase();
	const userController = new UserController(db);
	const userEntity = await userController.findByClerkId(clerkUser.id);

	if (userEntity) return userEntity;

	const user = userController.create({
		clerkId: clerkUser.id,
		email: clerkUser.primaryEmailAddress?.emailAddress,
		name: clerkUser.fullName ?? '',
	});

	revalidateTag('user');
	return user;
};
