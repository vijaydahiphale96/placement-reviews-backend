// import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsEmail } from "class-validator";

// export class UserLoginData {

//     @IsString()
//     @IsEmail()
//     emailId: string;

//     @IsString()
//     @IsNotEmpty()
//     password: string;

//     @IsBoolean()
//     @IsOptional()
//     isEmailIdVerified?: boolean;
// }

export interface UserLoginData {
    emailId: string;
    password: string;
    // isEmailIdVerified?: boolean;
}
