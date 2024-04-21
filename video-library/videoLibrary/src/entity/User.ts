import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
} from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	userName: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	ownVideo: string;

	@Column()
	updatedAt: string;

	@Column()
	createdAt: string;
}
