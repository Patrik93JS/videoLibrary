'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { DetailedHTMLProps, FormHTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { type DefaultValues, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

type Props<T extends z.ZodObject<z.ZodRawShape>> = {
	schema: T;
	children: ReactNode;
	action: (state: unknown, data: FormData) => Promise<unknown | undefined>;
	onSuccess?: () => void;
	defaultValues?: DefaultValues<z.TypeOf<T>>;
} & Omit<
	DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
	'className' | 'children' | 'ref' | 'action' | 'onSubmit' | 'children'
>;

export const FormContext = <T extends z.ZodObject<z.ZodRawShape>>({
	schema,
	children,
	action,
	onSuccess,
	defaultValues,
	...formProps
}: Props<T>) => {
	const [state, mutate] = useFormState(action, undefined);

	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues,
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
				{...formProps}
			>
				<div className="max-w-md w-full bg-white p-8 rounded-xl relative">{children}</div>
			</form>
		</FormProvider>
	);
};
