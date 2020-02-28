import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { IsString, IsBoolean, IsOptional, ValidateNested } from "class-validator";
import { User } from "./user.entity";
import { Review } from "./review.enity";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    public companyId?: number;

    @Column()
    @IsString()
    public companyName: string

    @Column({ default: false })
    @IsBoolean()
    public isVerified: boolean;

    // Optional:-
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
