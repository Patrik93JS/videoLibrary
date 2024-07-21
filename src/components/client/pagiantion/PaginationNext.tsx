import { FC } from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

type Props = {
	pageLimit: number;
	currentPage: number;
	onPageChange: () => void;
	dataLength: number;
};

export const PaginationNext: FC<Props> = ({ pageLimit, currentPage, onPageChange }) => {
	const isDisabled = currentPage >= pageLimit + 1;

	return (
		<button onClick={onPageChange} disabled={isDisabled}>
			<IoArrowForwardCircleOutline className="text-white hover:bg-black rounded-full hover:w-18 hover:h-18" size={50} />
		</button>
	);
};
