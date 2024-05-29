'use client';

import { type ButtonHTMLAttributes, type DetailedHTMLProps, FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className' | 'children'>;

export const Button: FC<Props> = ({ children, ...props }) => {
	return (
		<button
			className="w-56 flex justify-center mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			{...props}
		>
			{children}
		</button>
	);
};
