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
 
],
  controllers: [AppController],
  providers: [AppService, Cliente],
})
export class AppModule {}
