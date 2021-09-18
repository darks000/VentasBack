import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vendedor {   @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre: String;
    @Column()
    apellido: String;
    @Column()
    ciudad: String;
    @Column()
    telefono: number;
}
