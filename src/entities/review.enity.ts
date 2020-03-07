import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { IsString, IsBoolean, ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Company } from "./company.entity";
import { User } from "./user.entity";
import { College } from "./college.entity";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    public reviewId?: number;

    @CreateDateColumn()
    public createdAt: Date;

    @Column({ default: 0 })
    @IsOptional()
    @IsNumber()
    public likesCount?: number;

    @Column({ default: 0 })
    @IsOptional()
    @IsNumber()
    public disLikesCount?: number;

    @Column({ default: 0 })
    @IsOptional()
    @IsNumber()
    public spamCount?: number;

    @Column({ default: false })
    @IsOptional()
    @IsBoolean()
    public ignoreSpam: boolean;

    @Column()
    @IsNumber()
    public criteria: number;

    @Column()
    @IsNumber()
    public passingYear: number;

    @Column()
    @IsString()
    public title: string

    @Column()
    @IsString()
    public placedStatus: string

    // Relational:-
    @ManyToOne(type => Company, company => company.reviews)
    @JoinColumn()
    @ValidateNested()
    public company: Company;

    // Not needed for single college schema
    @ManyToOne(type => College, college => college.reviews)
    @JoinColumn()
    @ValidateNested()
    public college: College;

    // TODO: Check whether do we need seperate User relation for each - Liked, Disliked, favorite and spanned relation in User
    @ManyToMany(type => User, user => user.contributedReviews)
    @ValidateNested()
    public users: User[];
}