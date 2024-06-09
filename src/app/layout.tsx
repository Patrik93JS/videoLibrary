import './globals.css';
import '../database';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
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

const RootLayout = async ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	const userEntity = await getCurrentUserAction();

	return (
		<ClerkProvider>
			<Head>
				<title>Video Library</title>
				<meta
					name="description"
					content="Explore our vast collection of videos across multiple genres. From educational content to entertainment, discover videos that cater to your interests and stay updated with the latest trends."
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
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
					<main>{children}</main>
				</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;
