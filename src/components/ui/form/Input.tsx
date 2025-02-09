'use client';

import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
	name: string;
	title: ReactNode;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className' | 'name' | 'id' | 'children'>;

export const Input: FC<Props> = ({ name, title, hidden, ...props }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div className="mb-4" hidden={hidden}>
			<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{title}
			</label>
			<input
				id={name}
				{...register(name)}
				className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
				{...props}
			/>
			{errors[name] && <p className="text-red-500 mt-2">{errors[name]?.message?.toString()}</p>}
		</div>
	);
};
