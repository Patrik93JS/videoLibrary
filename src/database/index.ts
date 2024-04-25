// eslint-disable-next-line simple-import-sort/imports
import 'reflect-metadata';
import * as entities from './entity';
import { DataSource } from 'typeorm';

export * from './controllers';
export * from './entity';

export const database = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgresSecret',
	database: 'video-database',
	synchronize: true,
	logging: ['info', 'warn', 'error'],
	entities,
	migrations: [],
	subscribers: [],
});

export const withDatabase = async () => {
	if (!database.isInitialized) {
		await database.initialize();
	}
	return database;
};
