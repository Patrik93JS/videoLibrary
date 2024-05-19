'use server';

import Link from 'next/link';
import { ListCategory } from '../components/server/category/ListCategory';
import { ListFiles } from '../components/server/file/ListFiles';

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ListCategory />
			<Link href="/uploadFile" className="inline-block bg-black text-white py-2 px-4 rounded-lg">
				Upload file
			</Link>
			<Link href="/createCategory" className="mt-10 inline-block bg-black text-white py-2 px-4 rounded-lg">
				Create category
			</Link>
			<ListFiles />
		</main>
	);
}
