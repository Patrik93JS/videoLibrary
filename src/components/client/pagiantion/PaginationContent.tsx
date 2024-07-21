import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export const PaginationContent: FC<Props> = ({ children }) => {
	return <div className="flex justify-center items-center">{children}</div>;
};
