import { Authorized, Get, HttpCode, JsonController, Post, Body, Put, BadRequestError } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { CompanyManagerService } from '../managers/company-manager.service';
import { Company } from '../entities/company.entity';
import { BaseResponse, CustomError } from '../shared/models/base-response.model';
import { CustomErrors } from '../shared/errors/custom-errors';

@Service()
@JsonController()
export class CompanyController {

    @Inject(type => CompanyManagerService)
    companyManagerService: CompanyManagerService;

    constructor() {

    }

    @Authorized()
    @Get('/get-all-companies')
    @HttpCode(201)
    async getAllCompanies() {
        try {
            return await this.companyManagerService.getAllCompanies();
        } catch (error) {
            return new BaseResponse(true, null, new CustomError(CustomErrors.UNABLE_TO_HANDLE_REQUEST.code, CustomErrors.UNABLE_TO_HANDLE_REQUEST.title, CustomErrors.UNABLE_TO_HANDLE_REQUEST.message));
        }
    }

    @Authorized()
    @Post('/add-company')
    @HttpCode(201)
    public addCompany(@Body() company: Company) {
        return this.companyManagerService.addCompany(company);
    }

    @Authorized()
    @Put('/update-company')
    @HttpCode(201)
    public updateCompany(@Body() company: Company) {

        if (!company.companyId) {
            throw new BadRequestError('userId is missing');
        }

        return this.companyManagerService.updateCompany(company);
    }

}
