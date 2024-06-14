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
// body {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
//     Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
// }

// body,
// html {
//   height: 100%;
//   margin: 0;
// }

// .modal-backdrop {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.7);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// }

// .modal {
//   width: 80%;
//   max-width: 500px;
//   height: auto;
//   max-height: 500px;
//   border: none;
//   border-radius: 12px;
//   background-color: white;
//   padding: 20px;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 48px;
//   font-weight: 500;
// }

// .close-button {
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   width: 48px;
//   height: 48px;
//   background-color: transparent;
//   border: none;
//   border-radius: 15px; /* Circular shape */
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 500;
//   font-size: 24px; /* Adjust font size as needed */
// }

// .close-button:hover {
//   background-color: #eee;
// }

// .close-button:after {
//   content: 'x';
//   color: black;
// }

// .cards-container {
//   display: grid;
//   grid-template-columns: repeat(3, 200px);
//   gap: 16px;
//   justify-content: center;
//   align-items: center;
//   padding: 16px;
// }

// .card {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
//   background-color: #eee;
//   border-radius: 8px;
//   text-decoration: none;
//   color: black;
//   font-size: 24px;
//   font-weight: 500;
//   max-width: 200px;
// }

// @media (max-width: 600px) {
//   .cards-container {
//     grid-template-columns: 1fr;
//     justify-items: center;
//   }

//   .card {
//     width: 80%;
//   }
// }
