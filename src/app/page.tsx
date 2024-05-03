'use server';

import { auth } from '@clerk/nextjs/server';
import { UploadForm } from '@/components/server/file/UploadForm';
import { Uploader } from '../components/server/Uploader';
import { CreateUserForm } from '../components/server/user/CreateUserForm';
import { UpdateUserForm } from '../components/server/user/UpdateUserForm';
import { UserCard } from '../components/server/user/UserCard';
import { useModal } from '../util/hooks/useModal';

export default async function Home() {
	const { userId } = auth();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<CreateUserForm />
			<UserCard />
			<UpdateUserForm />
			<Uploader />
			<UploadForm />
		</main>
	);
}
