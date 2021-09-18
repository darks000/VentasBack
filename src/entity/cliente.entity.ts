import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:String;

    @Column()
    apellido:String;
    @Column()
    ciudad:String;
    @Column()
    telefono:String;
}
