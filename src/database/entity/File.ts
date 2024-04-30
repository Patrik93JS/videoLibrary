import { Column, Entity, ManyToOne, type Relation } from 'typeorm';
import { CommonEntity } from '@/database/utils/CommonEntity';
import { Video } from './Video';

@Entity()
export class File extends CommonEntity {
	@Column({ type: 'varchar' })
	name: string;

	@Column({ type: 'varchar', nullable: true })
	description: string;

	@Column({ type: 'varchar' })
	minetype: string;

	@ManyToOne(() => Video, (video) => video.id)
	video: Relation<Video>;
}
