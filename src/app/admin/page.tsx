import { getRoleAction } from '../../actions/getRoleAction';
import { getUserAction } from '../../actions/getUsersAction';
import { UsersList } from '../../components/client/roleManagement/UsersList';

const AdminSystem = async () => {
	const users = await getUserAction();
	const roles = await getRoleAction();

	return <UsersList users={users} roles={roles} />;
};

export default AdminSystem;
