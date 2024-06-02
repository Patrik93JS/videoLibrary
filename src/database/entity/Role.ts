import { Column, Entity, OneToMany, type Relation } from 'typeorm';
import type { UserRole } from '../../util/constants';
import { roles } from '../../util/constants';
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
