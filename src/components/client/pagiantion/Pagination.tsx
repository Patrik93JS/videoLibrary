'use client';

import { FC, ReactNode, useState } from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

type Props = {
	data?: ReactNode[];
	limit: number;
	children?: ReactNode;
};

const currentPage = [-1, 0, +1];

export const Pagination: FC<Props> = ({ data, limit, children }) => {
	const [page, setPage] = useState(1);

	return (
		<div className="flex justify-center items-center">
			{/* <div>{data?.length === limit && JSON.stringify(data)}</div>
			<div>{children === limit && children}</div> */}
			{children === limit && children}
			<button onClick={() => setPage(page - 1)} disabled={page === 1}>
				<IoArrowBackCircleOutline className="text-white hover:bg-black rounded-full hover: w-18 hover:h-18" size={50} />
			</button>

			{currentPage.map((state) => {
				return (
					<div
						key={state}
						className="text-white h-10 w-10 rounded-full bg-black flex justify-center items-center m-5 hover:bg-white hover:text-black cursor-pointer"
					>
						{page + state}
					</div>
				);
			})}
			<button onClick={() => setPage(page + 1)} disabled={page === 10}>
				<IoArrowForwardCircleOutline className="text-white hover:bg-black rounded-full hover: w-18 hover:h-18" size={50} />
			</button>
		</div>
	);
};
