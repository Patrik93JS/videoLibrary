import { FC, useState } from 'react';

type Props = {
	userId: string;
	onDelete: (userId: string) => Promise<void>;
};

export const DeleteUserButton: FC<Props> = ({ userId, onDelete }) => {
	const [loading, setLoading] = useState(false);

	const handleDelete = async () => {
		setLoading(true);
		await onDelete(userId);
		setLoading(false);
	};

	return (
		<button className="p-2 border-solid border-2 border-red-600" onClick={handleDelete} disabled={loading}>
			{loading ? 'Deleting...' : 'Delete'}
		</button>
	);
};
