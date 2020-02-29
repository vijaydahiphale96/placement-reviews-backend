import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { IsString, ValidateNested } from "class-validator";
import { User } from "./user.entity";


@Entity()
export class CompanyLog {

    @PrimaryGeneratedColumn()
    public companyLogId?: number;

    @Column()
    @IsString()
    public logType: string

    // TODO: Mostly we need to change Date type to string (Since we required only date, not time)
    @CreateDateColumn()
    public createdAt: Date;

    // TODO: need to check type :- since we are going to store old and new objects as a string
    @Column()
    @IsString()
    public logData: string;

    // Relational:-
    @ManyToOne(type => User, user => user.companyLogs)
    @JoinColumn()
    @ValidateNested()
    public user: User;
}
