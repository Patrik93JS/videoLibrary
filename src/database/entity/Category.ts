import { Column, Entity, OneToMany } from 'typeorm';
import { Video } from '@/database/entity';
import { CommonEntity } from '@/database/utils/CommonEntity';

@Entity()
export class Category extends CommonEntity {
	@Column({ type: 'varchar', unique: true, length: 50 })
	name: string;

	@OneToMany(() => Video, (video) => video.category)
	video: Video;
}
