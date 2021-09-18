export class FacturaDto {
    // el boolean lo usare si la factura esta paga (verdadero) no se puede modificar
    codigoFactura: String;
    nombreVendedor: String;
    nombreCliente: String;
    fechaVenta: String;
    estado:  boolean;
    saldoActual: number;
}
