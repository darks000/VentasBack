import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DetalleFactura {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    codigoFactura: String;
    @Column()
    nombreProducto: String;
    @Column()
    valorUnitario: number;
    @Column()
    cantidad: number;
}
