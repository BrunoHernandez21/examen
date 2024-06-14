import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, UpdateDateColumn } from "typeorm";

@Entity()
export class Appointment extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    curp: String;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAd: Date;

    @Column()
    dateOfAppointment: Date;
}