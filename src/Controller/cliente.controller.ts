/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, Put } from '@nestjs/common';
import { ClienteDto } from 'src/model/cliente-dto';
import{ClienteService} from'src/service/cliente.service'
@Controller('cliente')
export class ClienteController {
    constructor(private readonly ClienteService: ClienteService) {}

    @Post()
    async create(@Body() createClienteDto: ClienteDto) {
      return await this.ClienteService.crearCliente(createClienteDto);
    }

  
    /* async deleteOne(
        @Param('id') id: number,
    ): Promise<NameEntity> {
        const dto = await NameEntity.findOne(id);
    
        return NameEntity.remove(dto);
    } */
    
}
