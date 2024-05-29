import { Column, Entity, OneToMany, type Relation } from 'typeorm';
import { roles, UserRole } from '../../util/constants';
import { CommonEntity } from '../utils/CommonEntity';
import { User } from './User';

@Entity()
export class Role extends CommonEntity {
	@Column({
		type: 'enum',
		enum: roles,
	})
	name: UserRole;

	@OneToMany(() => User, (user) => user.role)
	users: Relation<User>[];
}
