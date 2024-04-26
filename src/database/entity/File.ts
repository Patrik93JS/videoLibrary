import { Column, Entity, OneToOne } from 'typeorm';
import { Video } from '@/database/entity';
import { CommonEntity } from '@/database/utils/CommonEntity';

@Entity()
export class File extends CommonEntity {
	@Column({ type: 'varchar', unique: true, length: 30 })
	name: string;

	@Column({ type: 'varchar', unique: true, length: 255 })
	description: string;

	@Column({ type: 'varchar', length: 255 })
	minetype: string;

	@OneToOne(() => Video, (video) => video.id)
	video: Video;
}
