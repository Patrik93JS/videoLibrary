'use server';
import { type FC } from 'react';
import { getCurrentUserAction } from '../actions/getCurrentUserAction';
import { FilterFiles } from '../components/client/file/FilterFiles';
import { isFilterOn } from '../components/client/file/types';
import { ListCategory } from '../components/server/category/ListCategory';
import { Link } from '../components/ui/reusable/Link';

const Home: FC<{
	searchParams?: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
	const filterParam = searchParams?.['filter'];
	const filter = isFilterOn(filterParam) ? filterParam : 'on';
	const userEntity = await getCurrentUserAction();

	return (
		<main className="flex  flex-col items-center justify-between p-24">
			{userEntity?.role.name === 'admin' && (
				<Link href="/admin" variant="secondary">
					Admin system
				</Link>
			)}
			<ListCategory />

			<Link href="/uploadFile">Upload file</Link>
			{userEntity?.role.name === 'admin' && (
				<Link href="/createCategory" variant="secondary">
					Create category
				</Link>
			)}
			<FilterFiles filter={filter} />
		</main>
	);
};

export default Home;
