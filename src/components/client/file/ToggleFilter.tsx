'use client';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { Button } from '../../ui/reusable/Button';
import type { Filter } from './types';

type Props = { filter: Filter };

export const ToggleFilter: FC<Props> = ({ filter }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();

	const toggleFilter = () => {
		setIsLoading(true);
		const newFilter = filter === 'on' ? 'off' : 'on';
		const newParams = new URLSearchParams({ filter });
		newParams.set('filter', newFilter);
		router.push(`?${newParams.toString()}`, { scroll: false });
		setIsLoading(false);
	};

	return (
		<Button onClick={toggleFilter} disabled={isLoading} variant="filter">
			{filter === 'on' ? 'Show All Videos' : 'Show My Videos'}
		</Button>
	);
};
