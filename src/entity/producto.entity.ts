import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producto {  
     @PrimaryGeneratedColumn()
     id:number;
     @Column()
    nombreProducto: String;
    @Column()
    valorUnitario: String;
    @Column()
    cantidadInventario: number;}
