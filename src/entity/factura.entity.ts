import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Factura {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    codigoFactura: String;
    @Column()
    nombreVendedor: String;
    @Column()
    nombreCliente: String;
    @Column()
    fechaVenta: String;
    @Column()
    estado:  boolean;
    @Column()
    saldoActual: number;
}
