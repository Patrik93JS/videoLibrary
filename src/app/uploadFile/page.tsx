import { UploadForm } from '../../components/client/file/UploadForm';

export default async function UploadFile() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<UploadForm />
		</main>
	);
}
