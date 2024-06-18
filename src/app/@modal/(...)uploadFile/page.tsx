'use server';
import { fetchCategoriesAction } from 'src/actions/fetchCategoriesAction';
import { UploadForm } from 'src/components/client/file/UploadForm';

const UploadFileModal = async () => {
	const categories = await fetchCategoriesAction();

	return <UploadForm categories={categories} />;
};

export default UploadFileModal;
