import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsString } from "class-validator";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    public roleId?: number;

    @Column()
    @IsString()
    public roleName: string

    @Column()
    @IsString()
    public roleDescription: string
}
