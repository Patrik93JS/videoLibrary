import { getRoleAction } from '../../actions/getRoleAction';
import { getUserAction } from '../../actions/getUsersAction';
import { UsersList } from '../../components/client/roleManagement/UsersList';

const AdminSystem = async () => {
	const users = await getUserAction();
	const roles = await getRoleAction();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800">
			<UsersList users={users} roles={roles} />;
		</main>
	);
};

export default AdminSystem;
