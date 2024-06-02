'use client';
import { FC } from 'react';
import { Role } from '../../../database/entity/Role';
import { User } from '../../../database/entity/User';
import { useModal } from '../../../util/hooks/useModal';
import { Button } from '../../ui/form/Button';
import { UserRolesForm } from './UserRolesForm';

type Props = {
	users: User[];
	roles: Role[];
};

export const UsersList: FC<Props> = ({ roles, users }) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<div className="overflow-x-auto">
				<table className="min-w-full w-full">
					<thead>
						<tr>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/2">
								User
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/2">
								Role
							</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/2">{user.name || user.email}</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/2">
									<div className="flex justify-between items-center">
										<span>{user.role?.name}</span>
										<Button onClick={() => openModal()}>Edit</Button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{isOpen && <UserRolesForm roles={roles} closeModal={closeModal} users={users} />}
		</>
	);
};
