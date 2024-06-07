'use client';

import { redirect } from 'next/navigation';
import { FC } from 'react';
import { updateUserAction } from '../../../actions/updateUserAction';
import { Role } from '../../../database/entity/Role';
import { User } from '../../../database/entity/User';
import { useHandleEscModal } from '../../../util/hooks/useHanndleEscModal';
import { userRolesSchema } from '../../../util/schemas/userRolesSchema';
import { FormContext } from '../../ui/form/FormContext';
import { Input } from '../../ui/form/Input';
import { Select } from '../../ui/form/Select';
import { Button } from '../../ui/reusable/Button';

type Props = {
	roles: Role[];
	selectedUser: User;
	closeModal: () => void;
};

export const UserRolesForm: FC<Props> = ({ roles, closeModal, selectedUser }) => {
	const options = roles.map((role) => ({
		label: role.name,
		value: role.id,
	}));

	useHandleEscModal(closeModal);

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
			<FormContext
				action={updateUserAction}
				schema={userRolesSchema}
				onSuccess={() => {
					closeModal();
					redirect('/admin');
				}}
				defaultValues={{
					userId: selectedUser.id,
					role: selectedUser.role.id,
				}}
			>
				<Button onClick={closeModal} variant="close" />
				<div className="mb-4 bg-white p-8 rounded-xl">
					<Input type="text" name="userId" title="User Id" hidden />
					<Select name="role" options={options} title="Select Role" />
					<Button type="submit">Save Changes</Button>
				</div>
			</FormContext>
		</div>
	);
};
