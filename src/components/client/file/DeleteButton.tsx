'use client';
import { useFormState } from 'react-dom';
import { IoTrashBin } from 'react-icons/io5';
import { deleteVideo } from '../../../actions/deleteVideo';
import { Button } from '../../ui/reusable/Button';

export const DeleteButton = ({ videoId }: { videoId: string }) => {
	const [, mutate] = useFormState(async (state: void, payload: FormData) => {
		await deleteVideo(payload);
	}, undefined);

	const handleDelete = async () => {
		if (!videoId) return;

		const formData = new FormData();
		formData.append('videoId', videoId);

		mutate(formData);
	};

	return (
		<Button variant="delete" onClick={handleDelete}>
			<IoTrashBin />
		</Button>
	);
};
