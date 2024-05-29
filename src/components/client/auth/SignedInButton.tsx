import { SignedIn, UserButton } from '@clerk/nextjs';

export const SignedInButton = () => {
	return (
		<SignedIn>
			<div className="absolute top-4 right-4 ">
				<UserButton />
			</div>
		</SignedIn>
	);
};
