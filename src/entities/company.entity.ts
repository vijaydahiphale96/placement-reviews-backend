import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { IsString, IsBoolean, IsOptional, ValidateNested, IsNumber } from "class-validator";
import { User } from "./user.entity";
import { Review } from "./review.enity";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    public companyId?: number;

    @Column()
    @IsString()
    public companyName: string

    // @Column({ default: false })
    // @IsOptional()
    // @IsBoolean()
    // public isVerified?: boolean;

    // Optional:-
    @Column({ default: 0 })
    @IsOptional()
    @IsNumber()
    public favoriteCount?: number;

    @Column()
    @IsOptional()
    @IsString()
    public companyShortName?: string

    // Relational:-
    @OneToMany(type => Review, reviews => reviews.company)
    public reviews: Review[];

    @ManyToMany(type => User, user => user.favoriteCompanies)
    @ValidateNested()
    public users: User[];
}
