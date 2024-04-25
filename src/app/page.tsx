'use server';

import { CreateUserForm } from '@/components/server/user/CreateUserForm';
import { UpdateUserForm } from '@/components/server/user/UpdateUserForm';
import { UserCard } from '@/components/server/user/UserCard';

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<CreateUserForm />
			<UserCard />
			<UpdateUserForm />
		</main>
	);
}
