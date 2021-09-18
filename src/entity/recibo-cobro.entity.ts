import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReciboCobro {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    codigoFacturaPagar: String;
    @Column()
    codigoReciboPago: String;
    @Column()
    tipoPago: String;
    @Column()
    descuento: number;
    @Column()
    totalPagado: number;
}
