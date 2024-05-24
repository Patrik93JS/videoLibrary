'use client';

import { redirect } from 'next/navigation';
import { type FC } from 'react';
import type { Category } from 'src/database/entity/Category';
import { uploadFileAction } from '../../../actions/UploadFileAction';
import { uploadFileSchema } from '../../../util/schemas/uploadFileSchema';
import { Button } from '../../ui/form/Button';
import { CustomInput } from '../../ui/form/CustomInput';
import { CustomSelect } from '../../ui/form/CustomSelect';
import { FormContext } from '../../ui/form/FormContext';
import { CloseRedirectLink } from '../reusable/CloseRedirectLink';

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
			<CloseRedirectLink />
			<CustomInput type="text" name="name" title="Name" />
			<CustomInput type="text" name="description" title="Description" />
			<CustomInput type="file" name="video" title="Video" />
			<CustomInput type="file" name="image" title="Image" />
			<CustomSelect name="categoryId" options={options} title="Category" />
			<Button type="submit">Upload</Button>
		</FormContext>
	);
};
