'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { PaginationContent } from './PaginationContent';
import { PaginationCurrent } from './PaginationCurrent';
import { PaginationNext } from './PaginationNext';
import { PaginationPrevious } from './PaginationPrevious';

type Props = {
	currentPage: number;
	dataLength: number;
	limit: number;
};

const pages = [-1, 0, +1];

export const Pagination: FC<Props> = ({ currentPage, dataLength, limit }) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const setPage = (page: number) => {
		const newParams = new URLSearchParams(searchParams.toString());
		newParams.set('page', page.toString());
		router.push(`?${newParams.toString()}`);
	};

	const pageLimit = Math.ceil(dataLength / limit);

	return (
		<PaginationContent>
			<PaginationPrevious currentPage={currentPage} onPageChange={() => setPage(currentPage - 1)} />
			<PaginationCurrent currentPage={currentPage} pages={pages} />
			<PaginationNext
				pageLimit={pageLimit}
				currentPage={currentPage}
				onPageChange={() => setPage(currentPage + 1)}
				dataLength={dataLength}
			/>
		</PaginationContent>
	);
};
