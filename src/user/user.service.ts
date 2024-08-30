import { Injectable } from '@nestjs/common';
import { CreateUSerDto } from './dto/create-user.dto'
import { UpdateUSerDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UserService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    findALL(role ?:'INTERN' | 'ADMIN' | 'ENGINEER'){
        if(role){
            const rolesArray= this.users.filter(user => user.role === role);
            if(rolesArray.length===0) throw new NotFoundException(`Role ${role} not found`);
            return rolesArray;
        }
        return this.users;
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id);
        if(!user) throw new NotFoundException(`User ${id} not found`);
        return user;
    }


    create(createUSerDto:CreateUSerDto){
        const userByHighestId=[...this.users].sort((a,b) =>b.id - a.id)

        const newUser = {
            id: userByHighestId[0].id + 1,
            ...createUSerDto
        }
        this.users.push(newUser);
        return newUser;
    }
    update(id: number, updateUserDto:UpdateUSerDto){
        const index = this.users.findIndex(user => user.id === id);
        if(index !== -1){
            this.users[index] = {...this.users[index],...updateUserDto}
            return {...this.users[index],...updateUserDto}
        }
        else{
            return {...this.users}
        }
        return  this.findOne(id)
    }

    delete(id: number){

        const removedUSer=this.findOne(id);
        if(removedUSer){
            this.users = this.users.filter(user => user.id!== id);
            return removedUSer;
        }
        return {...this.users}
    }
}
