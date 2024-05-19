'use server';
import { fetchCategoriesAction } from '../../actions/fetchCategoriesAction';
import { UploadForm } from '../../components/client/file/UploadForm';

export default async function UploadFile() {
	const categories = await fetchCategoriesAction();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<UploadForm categories={categories} />
		</main>
	);
}
