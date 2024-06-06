'use server';
import { withDatabase } from '../../../database';
import { CategoryController } from '../../../database/controllers';

export const ListCategory = async () => {
	const db = await withDatabase();
	const categoryController = new CategoryController(db);
	const data = await categoryController.list(1, 355);

	return (
		<div className="flex flex-wrap justify-center gap-4 my-10 mx-5">
			{data.map((category) => (
				<div key={category.id} className=" bg-white shadow-md rounded-lg p-4 flex items-center">
					<div className="text-lg font-semibold">{category.name}</div>
				</div>
			))}
		</div>
	);
};
