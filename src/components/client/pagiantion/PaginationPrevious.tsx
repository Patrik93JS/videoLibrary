import { FC } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

type Props = {
	currentPage: number;
	onPageChange: () => void;
};

export const PaginationPrevious: FC<Props> = ({ currentPage, onPageChange }) => {
	return (
		<button onClick={onPageChange} disabled={currentPage === 0}>
			{currentPage === 0 ? (
				<IoArrowBackCircleOutline className="text-white  rounded-full hover: w-18 hover:h-18" size={50} />
			) : (
				<IoArrowBackCircleOutline className="text-white hover:bg-black rounded-full hover: w-18 hover:h-18" size={50} />
			)}
		</button>
	);
};
