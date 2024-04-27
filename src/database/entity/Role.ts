import { Column, Entity, OneToMany, type Relation } from 'typeorm';
import { CommonEntity } from '@/database/utils/CommonEntity';
import { User } from './User';

@Entity()
export class Role extends CommonEntity {
	@Column({
		type: 'varchar',
		length: 30,
		nullable: false,
		unique: true,
	})
	name: string;

	@OneToMany(() => User, (user) => user.role)
	users: Relation<User>[];
}
