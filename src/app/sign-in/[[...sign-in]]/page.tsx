import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
	return (
		<div className="flex h-screen justify-center items-center align-middle">
			<SignIn path="/sign-in" />
		</div>
	);
};
export default SignInPage;
