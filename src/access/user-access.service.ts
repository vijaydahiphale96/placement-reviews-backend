import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { User } from "../entities/user.entity";



@Service()
export class UserAccessService {

    protected userRepository: Repository<User>;

    constructor() {
        this.userRepository = getRepository(User);
    }

}
