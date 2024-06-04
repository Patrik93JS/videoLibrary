'use client';
import { useFormState } from 'react-dom';
import { deleteVideo } from 'src/actions/deleteVideo';
import { Button } from 'src/components/ui/reusable/Button';

export const DeleteButton = ({ videoId }: { videoId: string }) => {
	'use client';
	const [, mutate] = useFormState(async (state: void, payload: FormData) => {
		await deleteVideo(payload);
	}, undefined);

	const handleDelete = async () => {
		if (!videoId) return;

		const formData = new FormData();
		formData.append('videoId', videoId);

		await mutate(formData);
	};

	return (
		<Button variant="delete" onClick={handleDelete}>
			Delete
		</Button>
	);
};
