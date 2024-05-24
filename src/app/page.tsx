'use server';

import { ListCategory } from '../components/server/category/ListCategory';
import { ListFiles } from '../components/server/file/ListFiles';
import { StyledLink } from '../components/server/reusable/StyledLink';

const Home = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ListCategory />
			<StyledLink href="/uploadFile">Upload file</StyledLink>
			<StyledLink href="/createCategory" variant="secondary">
				Create category
			</StyledLink>
			<ListFiles />
		</main>
	);
};

export default Home;
