'use client';

import { FC } from 'react';
import { createCategoryAction } from '../../../actions/createCategoryAction';
import { useModalContext } from '../../../app/@modal/Modal';
import { createCategorySchema } from '../../../util/schemas/createCategorySchema';
import { FormContext } from '../../ui/form/FormContext';
import { Input } from '../../ui/form/Input';
import { Button } from '../../ui/reusable/Button';

export const CreateFormCategory: FC = () => {
	const { onDismiss } = useModalContext();
	return (
		<FormContext action={createCategoryAction} schema={createCategorySchema} onSuccess={() => onDismiss()}>
			<Input type="text" name="name" title="Category" />
			<Button>Create</Button>
		</FormContext>
	);
};
