'use server';
import type { FC } from 'react';
import { ListFiles } from '../../server/file/ListFiles';
import { ToggleFilter } from './ToggleFilter';
import { Filter } from './types';

type Props = { filter: Filter };

export const FilterFiles: FC<Props> = ({ filter }) => {
	return (
		<div className="flex flex-col items-center bg-gray-800">
			<ToggleFilter filter={filter} />
			<ListFiles filter={filter} />
		</div>
	);
};
