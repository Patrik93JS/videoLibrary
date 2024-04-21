import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
} from "typeorm";
import { Video } from "./Video";

@Entity()
export class Group {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	groupName: string;

	@Column()
	videos: string[];

	@Column()
	updatedAt: string;

	@Column()
	createdAt: string;

	@ManyToOne(() => Video)
	video: Video;
}
