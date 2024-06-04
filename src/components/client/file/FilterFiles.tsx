'use client';

import { useState } from 'react';
import { ListFiles } from '../../server/file/ListFiles';
import { Button } from '../../ui/reusable/Button';

export const FilterFiles = () => {
	const [filter, setFilter] = useState('allVideos');

	const toggleFilter = () => {
		setFilter((prevFilter) => (prevFilter === 'allVideos' ? 'ownVideos' : 'allVideos'));
	};

	return (
		<div className="flex flex-col items-center">
			<Button onClick={toggleFilter}>{filter === 'allVideos' ? 'Show My Videos' : 'Show All Videos'}</Button>
			<ListFiles filter={filter} />
		</div>
	);
};
