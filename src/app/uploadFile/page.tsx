'use server';
import { fetchCategoriesAction } from '../../actions/fetchCategoriesAction';
import { UploadForm } from '../../components/client/file/UploadForm';

const UploadFile = async () => {
	const categories = await fetchCategoriesAction();

	return <UploadForm categories={categories} />;
};

export default UploadFile;
