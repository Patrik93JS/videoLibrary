'use client';

import { redirect } from 'next/navigation';
import { FC } from 'react';
import { createCategoryAction } from '../../../actions/createCategoryAction';
import { createCategorySchema } from '../../../util/schemas/createCategorySchema';
import { Button } from '../../ui/form/Button';
import { FormContext } from '../../ui/form/FormContext';
import { Input } from '../../ui/form/Input';
import { CloseRedirectLink } from '../../ui/reusable/CloseRedirectLink';

export const CreateFormCategory: FC = () => {
	return (
		<FormContext action={createCategoryAction} schema={createCategorySchema} onSuccess={() => redirect('/')}>
			<CloseRedirectLink />
			<Input type="text" name="name" title="Category" />
			<Button>Create</Button>
		</FormContext>
	);
};
