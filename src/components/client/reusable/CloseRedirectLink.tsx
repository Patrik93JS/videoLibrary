'use client';

import Link from 'next/link';
import { FC } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export const CloseRedirectLink: FC = () => {
	return (
		<div className="absolute top-4 right-4">
			<Link href="/">
				<IoCloseSharp className="text-gray-600 hover:text-gray-900 hover:bg-red-300  h-5 w-5" />
			</Link>
		</div>
	);
};
