"use server";

import {
	UserController,
	withDatabase,
} from "@/database";
import { revalidatePath } from "next/cache";

export const UpdateUserAction = async (
	data: FormData
) => {
	const userId = data.get("userId");
	const userName = data.get("userName");

	const db = await withDatabase();

	if (!userId || !userName) {
		return;
	}

	const userController = new UserController(db);

	await userController.update(userId.toString(), {
		name: userName.toString(),
	});

	revalidatePath("./");
};
