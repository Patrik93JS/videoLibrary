import { Column, Entity, OneToMany, type Relation } from 'typeorm';
import { CommonEntity } from '@/database/utils/CommonEntity';
import { Video } from './Video';

@Entity()
export class Category extends CommonEntity {
	@Column({ type: 'varchar', unique: true, length: 50 })
	name: string;

	@OneToMany(() => Video, (video) => video.category)
	video: Relation<Video>;
}
