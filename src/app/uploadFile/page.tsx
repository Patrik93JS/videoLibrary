'use server';
import { fetchCategoriesAction } from '../../actions/fetchCategoriesAction';
import { UploadForm } from '../../components/client/file/UploadForm';

const UploadFile = async () => {
	const categories = await fetchCategoriesAction();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800">
			<UploadForm categories={categories} />
		</main>
	);
};

export default UploadFile;
