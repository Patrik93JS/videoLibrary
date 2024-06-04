'use client';

import { redirect } from 'next/navigation';
import { type FC } from 'react';
import { uploadFileAction } from 'src/actions/UploadFileAction';
import type { Category } from 'src/database/entity/Category';
import { uploadFileSchema } from '../../../util/schemas/uploadFileSchema';
import { FormContext } from '../../ui/form/FormContext';
import { Input } from '../../ui/form/Input';
import { Select } from '../../ui/form/Select';
import { Button } from '../../ui/reusable/Button';
import { Link } from '../../ui/reusable/Link';

type Props = {
	categories: Category[];
};

export const UploadForm: FC<Props> = ({ categories }) => {
	const options = categories.map((category) => ({
		label: category.name,
		value: category.id,
	}));

	return (
		<FormContext action={uploadFileAction} schema={uploadFileSchema} onSuccess={() => redirect('/')}>
			<Link href="/" variant="close" />
			<Input type="text" name="name" title="Name" />
			<Input type="text" name="description" title="Description" />
			<Input type="file" name="video" title="Video" />
			<Input type="file" name="image" title="Image" />
			<Select name="categoryId" options={options} title="Category" />
			<Button type="submit">Upload</Button>
		</FormContext>
	);
};
