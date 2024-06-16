'use server';
import type { FC, ReactNode } from 'react';
import { Modal } from './Modal';

type Props = {
	children: ReactNode;
};

const UploadFileModal: FC<Props> = async ({ children }) => {
	return <Modal>{children}</Modal>;
};

export default UploadFileModal;
