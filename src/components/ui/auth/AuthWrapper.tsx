import { FC, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export const AuthWrapper: FC<Props> = ({ children }) => {
	return <div className="flex h-screen justify-center items-center align-middle">{children}</div>;
};
