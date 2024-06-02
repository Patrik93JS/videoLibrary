'use client';

import { redirect } from 'next/navigation';
import { FC, useEffect } from 'react';
import { updateUserAction } from '../../../actions/updateUserAction';
import { Role } from '../../../database/entity/Role';
import { User } from '../../../database/entity/User';
import { userRolesSchema } from '../../../util/schemas/userRolesSchema';
import { Button } from '../../ui/form/Button';
import { FormContext } from '../../ui/form/FormContext';
import { Select } from '../../ui/form/Select';
import { CloseRedirectLink } from '../../ui/reusable/CloseRedirectLink';

type Props = {
	roles: Role[];
	users: User[];
	closeModal: () => void;
};

export const UserRolesForm: FC<Props> = ({ roles, closeModal, users }) => {
	const options = roles.map((role) => ({
		label: role.name,
		value: role.id,
	}));

	const defaultValues = {
		userId: users[0]?.id || '',
		role: 'user',
	};

	//todo default data
	// selectedUser pres react hook form

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModal();
			}
		};

		document.addEventListener('keydown', handleEsc);

		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, [closeModal]);

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
			<FormContext
				action={updateUserAction}
				schema={userRolesSchema}
				onSuccess={() => {
					closeModal();
					redirect('/admin');
				}}
				defaultValues={defaultValues}
			>
				<CloseRedirectLink />
				<div className="mb-4 bg-white p-8 rounded-xl">
					<Select name="role" options={options} title="Select Role" />
					<Button type="submit">Save Changes</Button>
				</div>
			</FormContext>
		</div>
	);
};
