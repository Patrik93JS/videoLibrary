'use server';

import { UpdateUserAction } from '@/actions/user/UpdateUserAction';
import { withDatabase } from '@/database';
import { UserController } from '@/database/controllers';

export const UpdateUserForm = async () => {
	const db = await withDatabase();

	const result = await new UserController(db).list(1);

	const user = result.map((u) => u.name);
	return (
		<form action={UpdateUserAction} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<div className="my-3 px-2 border-solid border-2 border-sky-500">
				<input type="text" name="userId" placeholder="userId" />
			</div>
			<div className="my-3 px-2 border-solid border-2 border-sky-500">
				<input type="text" name="userName" required placeholder="userName" />
			</div>
			<input type="hidden" name="userName" value={user} />

			<button className="px-4 py-5  bg-green-600 text-white rounded hover:bg-green-700">Update</button>
		</form>
	);
};
