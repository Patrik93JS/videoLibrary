import { FC, useMemo } from 'react';
import { usePaginationContext } from './PaginationContent';

type Props = {
	pageRange?: number;
	showEdges?: boolean;
};

export const PaginationCurrent: FC<Props> = ({ pageRange = 5, showEdges = false }) => {
	const { currentPage, numOfPages, setCurrentPage } = usePaginationContext();
	const pages = useMemo(() => Array.from({ length: numOfPages }, (_, i) => i + 1), [numOfPages]);

	return (
		<>
			{pages
				.filter(
					(page, i, arr) =>
						(page >= currentPage - pageRange && page <= currentPage + pageRange) ||
						(showEdges && (i === 0 || i === arr.length - 1)),
				)
				.map((page) => {
					return (
						<button
							key={page}
							className={`text-white h-10 w-10 rounded-full bg-black flex justify-center items-center m-5 hover:bg-white hover:text-black cursor-pointer ${page === currentPage ? 'bg-white text-black' : ''}`}
							onClick={() => setCurrentPage(page)}
						>
							{page}
						</button>
					);
				})}
		</>
	);
};
