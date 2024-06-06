'use server';
import { type FC } from 'react';
import { FilterFiles } from 'src/components/client/file/FilterFiles';
import { isFilterOn } from 'src/components/client/file/types';
import { ListCategory } from '../components/server/category/ListCategory';
import { Link } from '../components/ui/reusable/Link';

const Home: FC<{
	searchParams?: { [key: string]: string | string[] | undefined };
}> = ({ searchParams }) => {
	const filterParam = searchParams?.['filter'];
	const filter = isFilterOn(filterParam) ? filterParam : 'on';

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

			<FilterFiles filter={filter} />
		</main>
	);
};

export default Home;
