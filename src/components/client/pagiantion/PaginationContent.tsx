import { createContext, type Dispatch, FC, ReactNode, type SetStateAction, useContext } from 'react';

type Props = {
	children: ReactNode;
} & PaginationContextType;

export const PaginationContent: FC<Props> = ({ children, currentPage, setCurrentPage, numOfPages }) => {
	return (
		<PaginationContext.Provider value={{ currentPage, setCurrentPage, numOfPages }}>
			<div className="flex justify-center items-center">{children}</div>
		</PaginationContext.Provider>
	);
};

type PaginationContextType = {
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	numOfPages: number;
};

const PaginationContext = createContext<PaginationContextType>({
	currentPage: 0,
	setCurrentPage: function () {
		throw new Error('Function not implemented.');
	},
	numOfPages: 0,
});

export const usePaginationContext = () => {
	const context = useContext(PaginationContext);

	return context;
};
