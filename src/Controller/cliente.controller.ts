/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cliente } from 'src/entity/cliente.entity';
import { ClienteDto } from 'src/model/cliente-dto';
import{ClienteService} from'src/service/cliente.service'

@Controller("cliente")
export class ClienteController {

    constructor(private readonly ClienteService: ClienteService) {}

    @Post()
    async create(@Body() createClienteDto: ClienteDto) {
      return await this.ClienteService.crearCliente(createClienteDto);
    }

    @Get()
    async findAll() {
      const data = await this.ClienteService.getAll();
      return {
        message: 'Peticion correcta',
        data,
      };
    }
  @Delete(':id')
  async deleteCliente(@Param('id') id: String){
    const data = await this.ClienteService.deleteCliente(id);
    return {
      message: 'Peticion correcta',
      data,
    };
  }

  @Put(':id')
  async update(@Param('id') id: String, @Body() updateClienteDto: ClienteDto) {
    const data = await this.ClienteService.updateCliente(id, updateClienteDto);
    return {
      message: 'Peticion correcta',
      data,
    };
  }
    
}
