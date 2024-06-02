'use client';

import { FC, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
	name: string;
	title: ReactNode;
	options: { value: string; label: ReactNode }[];
	className?: string;
};

export const Select: FC<Props> = ({ name, title, options, className }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div className="mb-4">
			<div className="flex items-center">
				<p className="block text-sm font-medium text-gray-700 mr-4">{title}</p>
				<select id={name} {...register(name)} className={`${className} form-select`}>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
			{errors[name] && <p className="text-red-500 mt-2">{errors[name]?.message?.toString()}</p>}
		</div>
	);
};
