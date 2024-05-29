import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { SignedInButton } from '../components/client/auth/SignedInButton';
import { SignedOutButton } from '../components/client/auth/SignedOutButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<header>
						<SignedOutButton />

						<SignedInButton />
					</header>
					<main>{children}</main>
				</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;
