// eslint-disable-next-line simple-import-sort/imports
import 'reflect-metadata/lite';
import { DataSource } from 'typeorm';
import { Category } from './entity/Category';
import { User } from './entity/User';
import { Role } from './entity/Role';
import { Video } from './entity/Video';
import { File } from './entity/File';

export const database = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgresSecret',
	database: 'video-database',
	synchronize: true,
	logging: true,
	entities: [Category, File, User, Role, Video],
	migrations: [],
	subscribers: [],
});

export const withDatabase = async () => {
	if (!database.isInitialized) {
		await database.initialize();
	}
	return database;
};
