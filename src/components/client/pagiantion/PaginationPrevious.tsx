import { FC } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { usePaginationContext } from './PaginationContent';

export const PaginationPrevious: FC = () => {
	const { currentPage, setCurrentPage } = usePaginationContext();
	const isDisabled = currentPage <= 1;

	return (
		<button onClick={() => setCurrentPage((curr) => curr - 1)} disabled={isDisabled}>
			{currentPage === 0 ? (
				<IoArrowBackCircleOutline className="text-white  rounded-full hover: w-18 hover:h-18" size={50} />
			) : (
				<IoArrowBackCircleOutline className="text-white hover:bg-black rounded-full hover: w-18 hover:h-18" size={50} />
			)}
		</button>
	);
};
