import './globals.css';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<header>
						<SignedOut>
							<SignInButton>
								<button className="absolute top-4 right-4 bg-black text-white py-2 px-4 rounded">Sign in</button>
							</SignInButton>
						</SignedOut>

						<SignedIn>
							<div className="absolute top-4 right-4 ">
								<UserButton />
							</div>
						</SignedIn>
					</header>
					<main>{children}</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
