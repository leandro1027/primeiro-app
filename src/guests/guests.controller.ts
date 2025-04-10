import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('guests')
export class GuestsController {
    constructor(private readonly GuestsService : GuestsService){}

    @Get()
    findAllGuests(@Query() paginationDto: PaginationDto ){
        return this.GuestsService.findAll(paginationDto)
    }

    @Get(':id')
    findOneGuests(@Param('id', ParseIntPipe) id: number){
        return this.GuestsService.findOne(id)
    }

    @Post()
    createGuests(@Body() CreateGuestDto: CreateGuestDto){
        return this.GuestsService.create(CreateGuestDto)
    }

    @Patch(':id')
        updateGuest(@Param('id', ParseIntPipe) id: number, @Body() UpdateGuestDto: UpdateGuestDto){
            return this.GuestsService.update(id, UpdateGuestDto)
    }

    @Delete(':id')
    removeGuests(@Param('id', ParseIntPipe) id:number){
        return this.GuestsService.delete(id)
    }
}
