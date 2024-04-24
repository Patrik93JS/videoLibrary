import "reflect-metadata";
import {
	Connection,
	createConnection,
	DataSource,
	getConnectionManager,
} from "typeorm";
import * as entities from "./entity";

export * from "./entity";
export * from "./controllers";

export const database = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgresSecret",
	database: "video-database",
	synchronize: true,
	logging: false,
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
