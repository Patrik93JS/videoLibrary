'use server';

import { ListCategory } from '../components/server/category/ListCategory';
import { ListFiles } from '../components/server/file/ListFiles';
import { Link } from '../components/ui/reusable/Link';

const Home = () => {
	return (
		<main className="flex  flex-col items-center justify-between p-24">
			<ListCategory />
			<Link href="/uploadFile">Upload file</Link>
			<Link href="/createCategory" variant="secondary">
				Create category
			</Link>
			<ListFiles />
		</main>
	);
};

export default Home;
