import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { User } from "../entities/user.entity";
import { College } from "../entities/college.entity";
import { UserLoginData } from "../shared/models/user.model";



@Service()
export class UserAccessService {

    protected userRepository: Repository<User>;
    protected collegeRepository: Repository<College>;

    constructor() {
        this.userRepository = getRepository(User);
        this.collegeRepository = getRepository(College);
    }

    async addUser(user: User): Promise<User> {
        user.createdAt = new Date();
        user.roleId = 1;
        user.isEmailIdVerified = false;
        return await this.userRepository.save(user);
    }

    async findUserData(userLoginData: UserLoginData): Promise<User | undefined> {
        userLoginData.isEmailIdVerified = true;
        return await this.userRepository.findOne(userLoginData);
    }

}
