import { SignedOut, SignInButton } from '@clerk/nextjs';

export const SignedOutButton = () => {
	return (
		<SignedOut>
			<SignInButton>
				<button className="absolute top-4 right-4 bg-black text-white py-2 px-4 rounded">Sign in</button>
			</SignInButton>
		</SignedOut>
	);
};
