'use server';
import { UserController, withDatabase } from '@/database';
import { DeleteUserAction } from '@/serverComponents/user/delete/DeleteUserAction';
import React from 'react';

export const UserCard = async () => {
	const db = await withDatabase();

	const result = await new UserController(db).list(1);
	return (
		<form action={DeleteUserAction} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{result.map((user, index) => (
				<div key={index} className="border-solid border-2 border-sky-500 rounded-lg p-4">
					<span className="block mb-2">{user.id}</span>
					<input type="hidden" name="userId" value={user.id} />
					<span className="block mb-2">
						userName:
						{user.name}
					</span>
					<input type="hidden" name="userName" value={user.name} />
					<div className="flex justify-between">
						<button type="submit" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
							Delete
						</button>
						<button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Update</button>
					</div>
				</div>
			))}
		</form>
	);
};
