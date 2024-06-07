'use server';

import { currentUser } from '@clerk/nextjs/server';
import { revalidateTag } from 'next/cache';
import { withDatabase } from '../database';
import { RoleController, UserController } from '../database/controllers';

export const getCurrentUserAction = async () => {
	const clerkUser = await currentUser();
	if (!clerkUser) return;

	const db = await withDatabase();
	const userController = new UserController(db);
	const roleController = new RoleController(db);
	const userEntity = await userController.findByClerkId(clerkUser.id);

	if (userEntity) return userEntity;

	const role = await roleController.findByName('user');

	const user = userController.create({
		clerkId: clerkUser.id,
		email: clerkUser.primaryEmailAddress?.emailAddress,
		name: clerkUser.fullName ?? '',
		role: { id: role.id },
	});

	revalidateTag('user');
	return user;
};
