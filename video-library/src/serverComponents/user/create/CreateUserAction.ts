"use server";

import {
	UserController,
	withDatabase,
} from "@/database";
import { revalidatePath } from "next/cache";

export const CreateUserAction = async (
	data: FormData
) => {
	const email = data.get("email");
	const password = data.get("password");
	const userName = data.get("userName");

	const db = await withDatabase();

	const result = await new UserController(
		db
	).create({
		email: String(email),
		password: String(password),
		name: String(userName),
	});

	revalidatePath("./");
};
