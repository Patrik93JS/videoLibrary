'use client';

import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export const Button: FC<Props> = ({ children }) => {
	return (
		<button
			type="submit"
			className="w-56 flex justify-center mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		>
			{children}
		</button>
	);
};
