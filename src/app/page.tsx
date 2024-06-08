'use server';
import { type FC } from 'react';
import { FilterFiles } from '../components/client/file/FilterFiles';
import { isFilterOn } from '../components/client/file/types';
import { ListCategory } from '../components/server/category/ListCategory';

const Home: FC<{
	searchParams?: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
	const filterParam = searchParams?.['filter'];
	const filter = isFilterOn(filterParam) ? filterParam : 'on';

	return (
		<main className="flex h-screen fixed w-screen flex-col items-center justify-between p-12 bg-gray-800">
			<div className="text-center">
				<p className="text-2xl font-bold underline decoration-sky-500/50 pb-4 text-white">All categories</p>
				<ListCategory />
			</div>

			<FilterFiles filter={filter} />
		</main>
	);
};

export default Home;
