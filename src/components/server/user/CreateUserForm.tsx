'use server';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';
import { CreateUserAction } from '@/actions/user/CreateUserAction';

const FormDataSchema = object({
	email: string().email({ message: 'Invalid email address' }),
	password: string().min(6, { message: 'Must be 6 or more characters long' }).regex(/[A-Z]/, 'Must has at least one Upper letter'),
	userName: string().min(3, { message: 'Must be 3 or more characters long' }),
});

export const CreateUserForm = () => {
	const { register, handleSubmit, errors } = useForm();
	return (
		<form action={CreateUserAction}>
			<div className="my-3 px-2 border-solid border-2 border-sky-500">
				<input type="text" name="userName" placeholder="userName" required />
			</div>
			<div className="my-3 px-2 border-solid border-2 border-sky-500">
				<input type="text" name="email" required placeholder="email" />
			</div>
			<div className="my-3 px-2 border-solid border-2 border-sky-500">
				<input type="text" name="password" placeholder="password" required />
			</div>

			<button type="submit" className="my-3 px-5 border-solid border-2 border-sky-500 flex items-center justify-center">
				Submit
			</button>
		</form>
	);
};
