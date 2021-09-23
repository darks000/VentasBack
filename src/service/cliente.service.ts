/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/entity/cliente.entity';
import { ClienteDto } from 'src/model/cliente-dto';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>,
      ) { }

      async getAll(): Promise<Cliente[]>  {
        //metodo asincrono  -> find es obtener todos los mensajes 
        return await this.clienteRepository.find();
      }

      async crearCliente(clienteNuevo: ClienteDto): Promise <CreateUserResponse>{
      
        const clientecc = await this.findonoCc(clienteNuevo.cedula);
     
        if(!clientecc){
          const post = this.clienteRepository.create({ ...clienteNuevo });
          const save =await this.clienteRepository.save(post)
       
          return {message:'cliente creado exitosamente', data:save };
        }
        return { message: 'Cédula ya se encuentra registrada', data: null };
      }

      async findonoCc(id: String): Promise <Cliente>{
      const client = await this.clienteRepository.findOne({where :{cedula: id}});
       if (!client) throw new NotFoundException('Usuario no existe');
      return client;
      }

      async findoneNombre(name: string): Promise<Cliente> {
        const client = await this.clienteRepository.findOne({where :{nombre: name}});
        return client;
      }      
}
 
// esta interfaz se utiliza para que los metodos retornen un mensaje y la data necesaria
export interface CreateUserResponse {
  message: string;
  data: Cliente;
}