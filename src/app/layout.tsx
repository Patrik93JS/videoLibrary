import './globals.css';
import '../database/index';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { getCurrentUserAction } from '../actions/getCurrentUserAction';
import { SignedInButton } from '../components/client/auth/SignedInButton';
import { SignedOutButton } from '../components/client/auth/SignedOutButton';
import { Link } from '../components/ui/reusable/Link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Video Library',
	description:
		'Explore our vast collection of videos across multiple genres. From educational content to entertainment, discover videos that cater to your interests and stay updated with the latest trends.',
};

type Props = Readonly<{
	children: ReactNode;
	modal: ReactNode;
}>;

const RootLayout = async ({ children, modal }: Props) => {
	const userEntity = await getCurrentUserAction();

	return (
		<>
			<ClerkProvider>
				<html lang="en">
					<body className={inter.className}>
						<header className="bg-gray-900 text-white flex justify-start items-center p-4 ">
							<Link href="/" variant="primary">
								VideoLibrary
							</Link>

							<div className="flex items-center gap-4">
								<Link href="/uploadFile">Upload</Link>
								{userEntity?.role.name === 'admin' && <Link href="/createCategory">Create category</Link>}
								{userEntity?.role.name === 'admin' && <Link href="/admin">Admin system</Link>}
								<SignedInButton />
								<SignedOutButton />
							</div>
						</header>
						<main>
							{children}
							{modal}
							<div id="modal-root" />
						</main>
					</body>
				</html>
			</ClerkProvider>
		</>
	);
};

export default RootLayout;
