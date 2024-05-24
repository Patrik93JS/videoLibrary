'use client';

import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { UploadForm } from '../file/UploadForm';

type Props = {
	type: string;
	name: string;
	registerInput: 'name' | 'description' | 'video' | 'image';
};

export const CustomInput: FC<Props> = ({ name, type, registerInput }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext<UploadForm>();
	return (
		<div className="mb-4">
			<p className="block text-sm font-medium text-gray-700">{name.toUpperCase()}</p>
			<input
				type={type}
				id={name}
				{...register(`${registerInput}`)}
				className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md"
			/>
			{errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
		</div>
	);
};
