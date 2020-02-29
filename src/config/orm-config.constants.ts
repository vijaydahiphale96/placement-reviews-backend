import { ConnectionOptions } from "typeorm";
import { User } from "../entities/user.entity";
import { College } from "../entities/college.entity";
import { Company } from "../entities/company.entity";
import { AccessToken } from "../entities/access-token.entity";
import { Review } from "../entities/review.enity";
import { Role } from "../entities/role.entity";
import { CompanyLog } from "../entities/company-log.entity";

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
        User,
        Role,
        Company,
        College,
        AccessToken,
        Review,
        CompanyLog
    ]
}
