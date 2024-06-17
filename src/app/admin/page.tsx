import { getRoleAction } from '../../actions/getRoleAction';
import { getUserAction } from '../../actions/getUsersAction';
import { UsersList } from '../../components/client/roleManagement/UsersList';
import { pageSeo } from '../../util/pageSeo';

const AdminSystem = async () => {
	const users = await getUserAction();
	const roles = await getRoleAction();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800">
			<UsersList users={users} roles={roles} />;
		</main>
	);
};

export const generateMetadata = async () => {
	return pageSeo({
		title: 'Admin Panel',
		description: 'Zde admin může nastavit roli uživatele',
		noIndex: true,
	});
};

export default AdminSystem;
