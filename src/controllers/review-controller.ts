import { Authorized, Get, HttpCode, JsonController, Post } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { ReviewManagerService } from '../managers/review-manager.service';

@Service()
@JsonController()
export class ReviewController {

    @Inject(type => ReviewManagerService)
    reviewManagerService: ReviewManagerService;

    constructor() {

    }

}
