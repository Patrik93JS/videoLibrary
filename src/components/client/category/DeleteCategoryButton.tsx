'use client';

import { useFormState } from 'react-dom';
import { IoTrashBin } from 'react-icons/io5';
import { deleteCategory } from '../../../actions/deleteCategory';
import { Button } from '../../ui/reusable/Button';

export const DeleteCategoryButton = ({ categoryId }: { categoryId: string }) => {
	const [, mutate] = useFormState(async (state: void, payload: FormData) => {
		await deleteCategory(payload);
	}, undefined);

	const handleDelete = async () => {
		if (!categoryId) return;

		const formData = new FormData();
		formData.append('categoryId', categoryId);

		mutate(formData);
	};

	return (
		<Button variant="delete" onClick={handleDelete}>
			<IoTrashBin />
		</Button>
	);
};
