'use client';

import { redirect } from 'next/navigation';
import { FC } from 'react';
import { Link } from 'src/components/ui/reusable/Link';
import { createCategoryAction } from '../../../actions/createCategoryAction';
import { createCategorySchema } from '../../../util/schemas/createCategorySchema';
import { FormContext } from '../../ui/form/FormContext';
import { Input } from '../../ui/form/Input';
import { Button } from '../../ui/reusable/Button';

export const CreateFormCategory: FC = () => {
	return (
		<FormContext action={createCategoryAction} schema={createCategorySchema} onSuccess={() => redirect('/')}>
			<Link href="/" variant="close" />
			<Input type="text" name="name" title="Category" />
			<Button>Create</Button>
		</FormContext>
	);
};
