import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { IsString, IsNumber, ValidateNested } from "class-validator";
import { User } from "./user.entity";

@Entity()
export class AccessToken {
    @PrimaryGeneratedColumn()
    public accessTokenId?: number;

    @Column()
    @IsString()
    public accessToken: string

    @CreateDateColumn()
    public createdAt: Date;

    // Relational:-
    @ManyToOne(type => User, user => user.accessTokens)
    @JoinColumn()
    @ValidateNested()
    public user: User;
}
