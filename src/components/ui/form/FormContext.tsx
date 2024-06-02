'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { DetailedHTMLProps, type FC, FormHTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {
	schema: z.ZodObject<z.ZodRawShape>;
	children: ReactNode;
	action: (state: unknown, data: FormData) => Promise<unknown | undefined>;
	onSuccess?: () => void;
	defaultValues?: Record<string, string | number>;
} & Omit<
	DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
	'className' | 'children' | 'ref' | 'action' | 'onSubmit' | 'children'
>;

export const FormContext: FC<Props> = ({ schema, children, action, onSuccess, defaultValues, ...formProps }) => {
	const [state, mutate] = useFormState(action, undefined);

	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: { defaultValues },
	});

	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (state) onSuccess?.();
	}, [state]);

	return (
		<FormProvider {...form}>
			<form
				ref={formRef}
				action={mutate}
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit(() => {
						mutate(new FormData(formRef.current!));
					})(e);
				}}
				className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-50"
				{...formProps}
			>
				<div className="max-w-md w-full bg-white p-8 rounded-xl relative">{children}</div>
			</form>
		</FormProvider>
	);
};
