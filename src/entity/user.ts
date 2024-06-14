import { Entity, CreateDateColumn, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryColumn()
    curp: String;
    
    @CreateDateColumn()
    createdAt: Date;
}