import { ConnectionOptions } from "typeorm";
import { User } from "../entities/user.entity";

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
        User
    ]
}
