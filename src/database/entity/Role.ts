import { Column, Entity, OneToMany } from 'typeorm';
import { User } from '@/database/entity';
import { CommonEntity } from '@/database/utils/CommonEntity';

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
	users: User[];
}
