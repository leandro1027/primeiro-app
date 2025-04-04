import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Controller('guests')
export class GuestsController {
    constructor(private readonly GuestsService : GuestsService){}

    @Get()
    findAllGuests(@Query() queryParam: any){
        return this.GuestsService.findAll()
    }

    @Get(':id')
    findOneGuests(@Param('id', ParseIntPipe) id: string){
        return this.GuestsService.findOne(id)
    }

    @Post()
    createGuests(@Body() CreateGuestDto: CreateGuestDto){
        return this.GuestsService.create(CreateGuestDto)
    }

    @Patch(':id')
        updateGuest(@Param('id', ParseIntPipe) id: string, @Body() UpdateGuestDto: UpdateGuestDto){
            return this.GuestsService.update(id, UpdateGuestDto)
    }

    @Delete(':id')
    removeGuests(@Param('id', ParseIntPipe) id:string){
        return this.GuestsService.remove(id)
    }
}
