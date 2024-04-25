import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	DeleteDateColumn,
} from "typeorm";

export abstract class CommonEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@CreateDateColumn({ type: "timestamptz" })
	createdAt: Date;

	@UpdateDateColumn({ type: "timestamptz" })
	updatedAt: Date;

	@DeleteDateColumn({ type: "timestamptz" })
	deletedAt: Date;
}
