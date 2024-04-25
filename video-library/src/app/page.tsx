"use server";

import { CreateUserForm } from "@/serverComponents/user/create/CreateUserForm";
import { UpdateUserForm } from "@/serverComponents/user/update/UpdateUserForm";
import { UserCard } from "@/serverComponents/user/UserCard";

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<CreateUserForm />
			<UserCard />
			<UpdateUserForm />
		</main>
	);
}
