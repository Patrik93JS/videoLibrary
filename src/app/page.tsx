'use server';
import { type FC } from 'react';
import { FilterFiles } from '../components/client/file/FilterFiles';
import { isFilterOn } from '../components/client/file/types';
import { ListCategory } from '../components/server/category/ListCategory';
import { pageSeo } from '../util/pageSeo';

const Home: FC<{
	searchParams?: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
	const filterParam = searchParams?.['filter'];
	const filter = isFilterOn(filterParam) ? filterParam : 'on';

	return (
		<main className="flex  flex-col items-center justify-between p-12 bg-gray-800">
			<div className="text-center">
				<p className="text-2xl font-bold underline decoration-sky-500/50 pb-4 text-white">All categories</p>
				<ListCategory />
			</div>

			<FilterFiles filter={filter} />
		</main>
	);
};

export const generateMetadata = async () => {
	return pageSeo({
		title: 'Video Library',
		description: 'Zde si uživatelé můžou prohlédnout všechyn dostupná videa',
	});
};

export default Home;
