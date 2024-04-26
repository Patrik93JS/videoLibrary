import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { Category, User } from '@/database/entity';
import { File } from '@/database/entity/File';
import { CommonEntity } from '@/database/utils/CommonEntity';

@Entity()
export class Video extends CommonEntity {
	@Column({ type: 'varchar', unique: true, length: 30 })
	name: string;

	@Column({ type: 'varchar', unique: true, length: 255 })
	description: string;

	@ManyToOne(() => User, (user) => user.id)
	user: User;

	@ManyToOne(() => Category, (category) => category.id)
	category: Category;

	@OneToOne(() => File, (file) => file.video)
	file: File;
}
