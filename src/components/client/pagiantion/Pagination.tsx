'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { PaginationContent } from './PaginationContent';
import { PaginationCurrent } from './PaginationCurrent';
import { PaginationNext } from './PaginationNext';
import { PaginationPrevious } from './PaginationPrevious';

type Props = {
	currentPage: number;
	dataLength: number;
};

export const Pagination: FC<Props> = ({ currentPage, dataLength }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [page, setPage] = useState(currentPage);

	useEffect(() => {
		const newParams = new URLSearchParams(searchParams.toString());
		newParams.set('page', page.toString());
		router.push(`?${newParams.toString()}`);
	}, [searchParams, page]);

	useEffect(() => {
		setPage(currentPage);
	}, [currentPage]);

	return (
		<PaginationContent currentPage={currentPage} setCurrentPage={setPage} numOfPages={dataLength}>
			<PaginationPrevious />
			<PaginationCurrent pageRange={1} showEdges />
			<PaginationNext />
		</PaginationContent>
	);
};
