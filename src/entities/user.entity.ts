import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { IsString, IsEmail, IsBoolean, IsNumber } from "class-validator";

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

    @Column({ default: false })
    @IsBoolean()
    public isEmailIdVerfied: boolean;

    @Column({ default: false })
    @IsBoolean()
    public isAdmin: boolean;

    @Column({ default: '12345' })
    @IsString()
    public password: string;

    @CreateDateColumn()
    public createdAt: Date;

    // Optional:-
    @Column({ default: 0 })
    @IsNumber()
    public totalLikes?: number;

    @Column({ default: 0 })
    @IsNumber()
    public totalFavoriteComponies?: number;

    // Relational:-
    @IsNumber()
    public collegeId: number;

}
