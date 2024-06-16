'use server';

import { currentUser } from '@clerk/nextjs/server';
import { revalidateTag } from 'next/cache';
import { RoleController, UserController } from '../database/controllers';
import { withDatabase } from '../database/index';

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
