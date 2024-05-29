import { Column, Entity, ManyToOne, type Relation } from 'typeorm';
import { CommonEntity } from '../utils/CommonEntity';
import { Role } from './Role';

@Entity()
export class User extends CommonEntity {
	@Column({ type: 'varchar', unique: true })
	name: string;

	@Column({ type: 'varchar', unique: true })
	email: string;

	@Column({ type: 'varchar', nullable: false })
	password: string;

	@ManyToOne(() => Role, (role) => role.users)
	role: Relation<Role>;
}
