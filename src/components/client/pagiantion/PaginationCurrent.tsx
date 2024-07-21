import { FC } from 'react';

type Props = {
	pages: number[];
	currentPage: number;
};

export const PaginationCurrent: FC<Props> = ({ pages, currentPage }) => {
	return (
		<>
			{pages.map((state) => {
				return (
					<div
						key={state}
						className="text-white h-10 w-10 rounded-full bg-black flex justify-center items-center m-5 hover:bg-white hover:text-black cursor-pointer"
					>
						{currentPage + state === -1 ? null : currentPage + state}
					</div>
				);
			})}
		</>
	);
};
