import { Column, Entity, ManyToOne } from 'typeorm';
import { Role } from '@/database/entity';
import { CommonEntity } from '@/database/utils/CommonEntity';

@Entity()
export class User extends CommonEntity {
	@Column({ type: 'varchar', unique: true })
	name: string;

	@Column({ type: 'varchar', unique: true })
	email: string;

	@Column({ type: 'varchar', nullable: false })
	password: string;

	@ManyToOne(() => Role, (role) => role.users)
	role: Role;
}
