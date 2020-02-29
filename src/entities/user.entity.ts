import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm";
import { IsString, IsEmail, IsBoolean, IsNumber, IsOptional, ValidateNested } from "class-validator";
import { AccessToken } from "./access-token.entity";
import { Company } from "./company.entity";
import { Review } from "./review.enity";
import { College } from "./college.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public userId?: number;

    @Column()
    @IsString()
    public firstName: string;

    @Column()
    @IsString()
    public lastName: string;

    @Column()
    @IsEmail()
    public emailId: string;

    @Column({ default: '12345' })
    @IsString()
    public password: string;

    @CreateDateColumn()
    public createdAt: Date;

    // Optional:-
    @Column({ default: 1 })
    @IsOptional()
    @IsNumber()
    public roleId?: number;

    @Column({ default: false })
    @IsOptional()
    @IsBoolean()
    public isEmailIdVerified?: boolean;

    @Column({ default: 0 })
    @IsOptional()
    @IsNumber()
    public totalLikes?: number;

    @Column({ default: 0 })
    @IsOptional()
    @IsNumber()
    public totalFavoriteComponies?: number;

    // Relational:-
    @OneToMany(type => AccessToken, accessTokens => accessTokens.user)
    public accessTokens: AccessToken[];

    @ManyToMany(type => Company, company => company.users)
    @JoinTable()
    @ValidateNested()
    public favoriteCompanies: Company[];

    @ManyToMany(type => Review, review => review.users)
    @JoinTable()
    @ValidateNested()
    public contributedReviews: Review[];

    @ManyToMany(type => Review, review => review.users)
    @JoinTable()
    @ValidateNested()
    public likedReviews: Review[];

    @ManyToMany(type => Review, review => review.users)
    @JoinTable()
    @ValidateNested()
    public spammedReviews: Review[];

    // Not needed for single college schema
    @ManyToOne(type => College, college => college.users)
    @JoinColumn()
    @ValidateNested()
    public college?: College;
}
