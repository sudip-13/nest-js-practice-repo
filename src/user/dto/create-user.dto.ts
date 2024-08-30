import { IsEmail, IsEnum,IsNotEmpty,IsString } from 'class-validator';

export class CreateUSerDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsEnum(['INTERN', 'ADMIN', 'ENGINEER'],{
        message: 'Valid role required'
    })
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
}