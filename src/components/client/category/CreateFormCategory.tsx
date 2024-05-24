'use client';

import { redirect } from 'next/navigation';
import { FC } from 'react';
import { createCategoryAction } from '../../../actions/createCategoryAction';
import { createCategorySchema } from '../../../util/schemas/createCategorySchema';
import { Button } from '../../ui/form/Button';
import { CustomInput } from '../../ui/form/CustomInput';
import { FormContext } from '../../ui/form/FormContext';
import { CloseRedirectLink } from '../reusable/CloseRedirectLink';

export const CreateFormCategory: FC = () => {
	return (
		<FormContext action={createCategoryAction} schema={createCategorySchema} onSuccess={() => redirect('/')}>
			<CloseRedirectLink />
			<CustomInput type="text" name="name" title="Category" />
			<Button>Create</Button>
		</FormContext>
	);
};
