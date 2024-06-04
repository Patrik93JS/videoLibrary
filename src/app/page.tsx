'use server';

import { currentUser } from '@clerk/nextjs/server';
import { useFormState } from 'react-dom';
import { ListCategory } from '../components/server/category/ListCategory';
import { ListFiles } from '../components/server/file/ListFiles';
import { Button } from '../components/ui/reusable/Button';
import { Link } from '../components/ui/reusable/Link';

// 1 prvni moznost
const Home = async () => {
	const user = await currentUser();

	if (!user) return <div>Not signed in</div>;

	const [state, mutate] = useFormState(async (state: FormDataEntryValue | null, payload: FormData) => {
		return payload.get('filter');
	}, 'allVideos');

	const toggleFilter = () => {
		const newFilter = state === 'allVideos' ? 'ownVideos' : 'allVideos';
		const formData = new FormData();
		formData.append('filter', newFilter);
		mutate(formData);
	};

	return (
		<main className="flex  flex-col items-center justify-between p-24">
			<Link href="/admin" variant="secondary">
				Admin system
			</Link>
			<ListCategory />

			<Link href="/uploadFile">Upload file</Link>
			<Link href="/createCategory" variant="secondary">
				Create category
			</Link>

			<div className="flex justify-center my-5">
				<Button onClick={toggleFilter}>{state === 'allVideos' ? 'Show My Videos' : 'Show All Videos'}</Button>
			</div>

			<ListFiles filter={state} />
		</main>
	);
};

export default Home;

// 2 moznost

// const Home = async () => {
// 	const user = await currentUser();

// 	if (!user) return <div>Not signed in</div>;
// 	return (
// 		<main className="flex  flex-col items-center justify-between p-24">
// 			<Link href="/admin" variant="secondary">
// 				Admin system
// 			</Link>
// 			<ListCategory />

// 			<Link href="/uploadFile">Upload file</Link>
// 			<Link href="/createCategory" variant="secondary">
// 				Create category
// 			</Link>
// 			<FilterFiles />
// 		</main>
// 	);
// };
