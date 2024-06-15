/* eslint-disable simple-import-sort/imports */
'use client';

import { useRouter } from 'next/navigation';
import { createContext, type ElementRef, type FC, type PropsWithChildren, useEffect, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import { CgClose } from 'react-icons/cg';

type ModalContextType = {
	onDismiss: () => void;
};

const ModalContext = createContext<ModalContextType>({
	onDismiss: function (): void {
		throw new Error('Function not implemented.');
	},
});

export const useModalContext = () => {
	const context = useContext(ModalContext);

	return context;
};

export const Modal: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<'dialog'>>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	const onDismiss = () => {
		router.back();
	};

	return createPortal(
		<div className="absolute inset-0 bg-black/50 backdrop-blur-sm">
			<dialog
				ref={dialogRef}
				className="flex w-3/4 h-3/4 max-w-[500px] max-h-[500px] bg-white rounded-lg p-4 shadow-xl"
				onClose={onDismiss}
			>
				<ModalContext.Provider value={{ onDismiss }}>{children}</ModalContext.Provider>
				<button onClick={onDismiss} className="absolute top-4 right-4 p-1 rounded-full bg-white text-black">
					<CgClose />
				</button>
			</dialog>
		</div>,
		document.getElementById('modal-root')!,
	);
};
