import { SignIn } from '@clerk/nextjs';
import { NextPage } from 'next';
import { AuthWrapper } from '../../../components/ui/auth/AuthWrapper';

const SignInPage: NextPage = () => {
	return (
		<AuthWrapper>
			<SignIn path="/sign-in" />
		</AuthWrapper>
	);
};

export default SignInPage;
