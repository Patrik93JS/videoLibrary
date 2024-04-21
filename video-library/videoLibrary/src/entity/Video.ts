import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Video {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	groupName: string;

	@Column()
	userName: string;

	@Column()
	userId: string;

	@Column()
	updatedAt: string;

	@Column()
	createdAt: string;

	@ManyToOne(() => User)
	user: User;
}
