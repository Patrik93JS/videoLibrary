import { SignUp } from '@clerk/nextjs';

const SignInPage = () => {
	return (
		<div className="flex h-screen justify-center items-center align-middle">
			<SignUp path="/sign-up" />
		</div>
	);
};

export default SignInPage;
