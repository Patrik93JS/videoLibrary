import { FC } from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { usePaginationContext } from './PaginationContent';

export const PaginationNext: FC = () => {
	const { currentPage, setCurrentPage, numOfPages } = usePaginationContext();
	const isDisabled = currentPage >= numOfPages;

	return (
		<button onClick={() => setCurrentPage((curr) => curr + 1)} disabled={isDisabled}>
			<IoArrowForwardCircleOutline className="text-white hover:bg-black rounded-full hover:w-18 hover:h-18" size={50} />
		</button>
	);
};
