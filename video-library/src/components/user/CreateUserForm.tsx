"use server";
import {
	UserController,
	withDatabase,
} from "@/database";
import { revalidatePath } from "next/cache";
import { FC } from "react";

type Props = {};

export const CreateUserForm: FC<Props> = () => {
	return (
		<form action={CreateUserAction}>
			<div className="my-3 px-2 border-solid border-2 border-sky-500">
				<input
					type="text"
					name="userName"
					placeholder="userName"
					required
				/>
			</div>
			<div className="my-3 px-2 border-solid border-2 border-sky-500">
				<input
					type="text"
					name="email"
					required
					placeholder="email"
				/>
			</div>
			<div className="my-3 px-2 border-solid border-2 border-sky-500">
				<input
					type="text"
					name="password"
					placeholder="password"
					required
				/>
			</div>

			<button className="my-3 px-5 border-solid border-2 border-sky-500 flex items-center justify-center">
				Submit
			</button>
		</form>
	);
};

const CreateUserAction = async (
	data: FormData
) => {
	"use server";

	const email = data.get("email");
	const password = data.get("password");
	const userName = data.get("userName");

	const db = await withDatabase();

	const result = await new UserController(
		db
	).create({
		email: String(email),
		password: String(password),
		userName: String(userName),
	});

	revalidatePath("./");
};
