import { Service } from "typedi";
import { Repository, getRepository } from "typeorm";
import { Review } from "../entities/review.enity";



@Service()
export class ReviewAccessService {

    protected reviewRepository: Repository<Review>;

    constructor() {
        this.reviewRepository = getRepository(Review);
    }

}
