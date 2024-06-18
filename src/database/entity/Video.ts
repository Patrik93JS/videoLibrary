import { Column, Entity, ManyToOne, OneToMany, type Relation } from 'typeorm';
import { CommonEntity } from '../utils/CommonEntity';
import { Category } from './Category';
import { File } from './File';
import { User } from './User';

@Entity()
export class Video extends CommonEntity {
	@Column({ type: 'varchar' })
	name: string;

	@Column({ type: 'varchar' })
	description: string;

	@ManyToOne(() => User, (user) => user.id)
	user: User;

	@ManyToOne(() => Category, (category) => category.video)
	category: Relation<Category>;

	@OneToMany(() => File, (file) => file.video)
	files: Relation<File>[];
}
