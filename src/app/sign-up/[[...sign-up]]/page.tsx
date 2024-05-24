import { SignUp } from '@clerk/nextjs';
import { NextPage } from 'next';
import { AuthWrapper } from '../../../components/ui/auth/AuthWrapper';

const SignInPage: NextPage = () => {
	return (
		<AuthWrapper>
			<SignUp path="/sign-up" />
		</AuthWrapper>
	);
};

export default SignInPage;
