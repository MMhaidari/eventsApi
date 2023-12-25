import { Controller, Get, Post, Patch, Delete, Param, Body } from "@nestjs/common";
import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";
import { Event } from "./event.entity";

@Controller('/events')
export class EventsController {
    private events: Event[] = []
    @Get()
    findAll() {
        return this.events
    }

    @Get(':id')
    findOne(@Param('id') id) {
        const event = this.events.find(event => event.id === parseInt(id));
        
    }

    @Post()
    create(@Body() input: CreateEventDto){
        return input
    }

    @Patch(':id')
    update(@Param('id') id, @Body() input: UpdateEventDto){}

    @Delete(':id')
    remove(@Param('id') id){}
}