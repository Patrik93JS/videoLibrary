import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
} from "typeorm";
import { CommonEntity } from "@/database/utils/CommonEntity";

@Entity()
export class User extends CommonEntity {
	@Column()
	userName: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column({ nullable: true })
	ownVideo: string;
}
