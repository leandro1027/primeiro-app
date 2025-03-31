import { Controller } from '@nestjs/common';
import { GuestsService } from './guests.service';

@Controller('guests')
export class GuestsController {
    constructor(private readonly GuestsService : GuestsService){}

    @Get ()
    findAllGuests(@Query() queryParam: any){
        return this.GuestsService.findAll()
    }
}
