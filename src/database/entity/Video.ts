import { Column, Entity, ManyToOne, OneToOne, type Relation } from 'typeorm';
import { CommonEntity } from '@/database/utils/CommonEntity';
import { Category } from './Category';
import { File } from './File';
import { User } from './User';

@Entity()
export class Video extends CommonEntity {
	@Column({ type: 'varchar', unique: true, length: 30 })
	name: string;

	@Column({ type: 'varchar', unique: true, length: 255 })
	description: string;

	@ManyToOne(() => User, (user) => user.id)
	user: User;

	@ManyToOne(() => Category, (category) => category.id)
	category: Relation<Category>;

	@OneToOne(() => File, (file) => file.video)
	file: Relation<File>;
}
