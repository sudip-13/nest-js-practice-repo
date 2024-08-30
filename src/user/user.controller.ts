import { Body, Controller, Delete, Get, Param, Patch, Post, Query,ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUSerDto } from './dto/create-user.dto'
import { UpdateUSerDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    /*
    GET /user
    GET /user/:id
    POST /user
    PATCH /user/:id
    DELETE /user/:id
    */

    // @Get() // GET /user/
    // findALL(){
    //     return []
    // }

    constructor(private readonly usersService: UserService){}

    @Get() 
    findALL(@Query('role') role?:'INTERN' | 'ADMIN' | 'ENGINEER'){
        return this.usersService.findALL(role);
    }


    @Get('interns') // GET /user/interns
    findAllInterns(){
        return []
    }
    @Get(':id') // GET /user/:id
    findOne(@Param('id',ParseIntPipe) id: number){
        return this.usersService.findOne(id);
    }

    @Post() // POST /user
    create(@Body(ValidationPipe) createUSerDto : CreateUSerDto){
        return this.usersService.create(createUSerDto);
    }

    @Patch(':id') // PATCH /user/:id
    update(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) userUpdateDto:UpdateUSerDto){
        return this.usersService.update(id, userUpdateDto);
    }

    @Delete(':id') // DELETE /user/:id
    remove(@Param('id',ParseIntPipe) id: number){
        return this.usersService.delete(id)
    }

   


}
