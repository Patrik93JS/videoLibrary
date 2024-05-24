'use client';

import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import type { Category } from 'src/database/entity/Category';

type Props = {
	name: string;
	options: Category[];
};

export const CustomSelect: FC<Props> = ({ name, options }) => {
	const { register } = useFormContext();

	return (
		<select
			id={name}
			className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
			{...register(name)}
		>
			{options.map((option) => (
				<option key={option.id} value={option.id}>
					{option.name}
				</option>
			))}
		</select>
	);
};
