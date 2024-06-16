'use server';
import { CategoryController } from '../../../database/controllers';
import { withDatabase } from '../../../database/index';

export const ListCategory = async () => {
	const db = await withDatabase();
	const categoryController = new CategoryController(db);
	const data = await categoryController.list(1, 355);

	return (
		<div className="grid grid-cols-3 gap-6 p-5">
			{data.map((category) => (
				<div key={category.id} className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
					<h2 className="text-xl font-semibold text-center">{category.name}</h2>
				</div>
			))}
		</div>
	);
};
