import { Service, Inject } from "typedi";
import { ReviewAccessService } from "../access/review-access.service";



@Service()
export class ReviewManagerService {

    @Inject(type => ReviewAccessService)
    reviewAccessService: ReviewAccessService;

    constructor() {

    }

}
