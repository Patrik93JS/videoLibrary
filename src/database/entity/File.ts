import { Column, Entity, ManyToOne, type Relation } from 'typeorm';
import { CommonEntity } from '../utils/CommonEntity';
import { Video } from './Video';

@Entity()
export class File extends CommonEntity {
	@Column({ type: 'varchar' })
	name: string;

	@Column({ type: 'varchar', nullable: true })
	description: string;

	@Column({ type: 'varchar' })
	minetype: string;

	@ManyToOne(() => Video, (video) => video.id, { eager: true })
	video: Relation<Video>;
}
