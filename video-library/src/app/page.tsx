"use server";
import { CreateUserForm } from "@/components/user/CreateUserForm";
import { withDatabase } from "@/database";
import { UserController } from "@/database";
import Image from "next/image";

export default async function Home() {
	const db = await withDatabase();

	const result = await new UserController(
		db
	).list();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<CreateUserForm />

			{result.map((user, index) => (
				<div
					key={`${user} + ${index}`}
					className="my-1 px-2 border-solid border-2 border-sky-500"
				>
					{user.userName} <br />
				</div>
			))}
		</main>
	);
}
