import { VendedorController } from './Controller/vendedor.controller';
import { ReciboCobroController } from './Controller/recibo-cobro.controller';
import { ProductoController } from './Controller/producto.controller';
import { DetalleFacturaController } from './Controller/detalle-factura.controller';
import { FacturaController } from './Controller/factura.controller';
import { ClienteController } from './Controller/cliente.controller';
import { ProductoService } from './service/producto.service';
import { ReciboCobroService } from './service/recibo-cobro.service';
import { FacturaService } from './service/factura.service';
import { VendedorService } from './service/vendedor.service';
import { DetalleFacturaService } from './service/detalle-factura.service';
import { ClienteService } from './service/cliente.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cliente } from './entity/cliente.entity';
import { DetalleFactura } from './entity/detalle-factura.entity';

@Module({
  imports: [
  
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dario',
      password: '123',
      database: 'ventas_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Cliente])


  ],
  controllers: [
    VendedorController,
    ReciboCobroController,
    ProductoController,
    DetalleFacturaController,
    FacturaController,
    ClienteController, AppController],
  providers: [
    ProductoService,
    ReciboCobroService,
    FacturaService,
    VendedorService,
    DetalleFacturaService,
    ClienteService, AppService],
})
export class AppModule { }
