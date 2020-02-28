import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IsString, IsBoolean } from "class-validator";
import { User } from "./user.entity";
import { Review } from "./review.enity";

@Entity()
export class College {
    @PrimaryGeneratedColumn()
    public collegeId?: number;

    @Column()
    @IsString()
    public collegeName: string

    @Column()
    @IsString()
    public collegeShortName: string

    @Column({ default: false })
    @IsBoolean()
    public isVerified: boolean;

    // Relational

    // Not needed for single college schema
    @OneToMany(type => User, users => users.college)
    public users: User[];

    // Not needed for single college schema
    @OneToMany(type => Review, reviews => reviews.college)
    public reviews: Review[];
}
