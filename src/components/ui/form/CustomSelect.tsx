'use client';

import { FC, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
	name: string;
	title: ReactNode;
	options: { value: string; label: ReactNode }[];
};

export const CustomSelect: FC<Props> = ({ name, title, options }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div className="mb-4">
			<p className="block text-sm font-medium text-gray-700">{title}</p>
			<select id={name} {...register(name)}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{errors[name] && <p className="text-red-500 mt-2">{errors[name]?.message?.toString()}</p>}
		</div>
	);
};
