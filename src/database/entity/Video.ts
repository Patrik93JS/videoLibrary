import { Column, Entity, ManyToOne, OneToMany, type Relation } from 'typeorm';
import { CommonEntity } from '@/database/utils/CommonEntity';
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

	@ManyToOne(() => Category, (category) => category.id)
	category: Relation<Category>;

	@OneToMany(() => File, (file) => file.video)
	file: Relation<File>;
}
