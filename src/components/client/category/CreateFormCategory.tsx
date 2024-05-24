import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Form, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { createCategoryAction } from '../../../actions/createCategoryAction';
import { Button } from '../reusable/Button';
import { CloseRedirectLink } from '../reusable/CloseRedirectLink';
import { CustomInput } from '../reusable/CustomInput';

const formDataSchema = z.object({
	name: z.string().min(3, { message: 'Must be 3 or more characters long' }),
});

export type CreateFormCategory = z.infer<typeof formDataSchema>;

export const CreateFormCategory: FC = () => {
	const methods = useForm<CreateFormCategory>({
		resolver: zodResolver(formDataSchema),
	});
	const { handleSubmit } = methods;

	const onSubmit: SubmitHandler<CreateFormCategory> = async (data) => {
		const formData = new FormData();
		formData.append('name', data.name);

		try {
			await createCategoryAction(formData);
		} catch (error) {
			console.error('Chyba při odesílání formuláře:', error);
		}
	};

	return (
		<FormProvider {...methods}>
			<Form
				onSubmit={handleSubmit(onSubmit)}
				action={createCategoryAction}
				className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-10"
			>
				<div className="max-w-md w-full bg-white p-8 bottom-20 rounded-xl relative">
					<CloseRedirectLink />
					<CustomInput type="text" name="Category" registerInput="name" />
					<Button>Create</Button>
				</div>
			</Form>
		</FormProvider>
	);
};
