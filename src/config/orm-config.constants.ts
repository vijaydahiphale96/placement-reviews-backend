import { ConnectionOptions } from "typeorm";

export const ORM_CONNECTION_OPTIONS: ConnectionOptions = {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'vijay@pict',
    database: 'placement_reviews',
    synchronize: true,
    logging: false,
    cache: false,
    entities: [
    ]
}
