'use client';

import { useUser } from '@clerk/nextjs';
import { FC, useEffect } from 'react';

type Props = {
	action: () => void;
};

export const CreateUser: FC<Props> = ({ action }) => {
	const { isSignedIn, user } = useUser();

	useEffect(() => {
		if (isSignedIn && user) {
			action();
		}
	}, [isSignedIn, user, action]);
	if (!user) return;

	return <h1>{user}</h1>;
};
