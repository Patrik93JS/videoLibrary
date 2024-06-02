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
				<label htmlFor={name} className="block text-sm font-medium text-gray-700 mr-4">
					{title}
				</label>
				<select id={name} {...register(name)} className={`${className} form-select`}>
					{options.map(({ label, value }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>
			{errors[name] && <p className="text-red-500 mt-2">{errors[name]?.message?.toString()}</p>}
		</div>
	);
};
