'use client';

import { FC } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from './Link';

type Props = {
	onClick?: () => void;
	href?: string;
};

export const CloseRedirectLink: FC<Props> = ({ onClick, href = '/' }) => {
	return (
		<Link href={href} variant="close" onClick={onClick}>
			<IoCloseSharp className="text-gray-600 hover:text-gray-900 hover:bg-red-300  h-5 w-5" />
		</Link>
	);
};
