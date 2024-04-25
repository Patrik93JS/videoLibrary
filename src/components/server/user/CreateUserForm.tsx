'use server';
import { CreateUserAction } from '@/actions/CreateUserAction';

export const CreateUserForm = () => {
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
