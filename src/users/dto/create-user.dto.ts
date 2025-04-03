import { IsEmail, IsNegative, IsNotEmpty, IsString, MaxLength } from "class-validator"

export class CreateUserDto{
   
    @IsString({message: "O nome precisa ser um texto!"})
    @MaxLength(20, {message: "O nome precisa ter no máximo 20 caracteres!"})
    @IsNotEmpty({message: "O nome não pode ser vazio!"})
    readonly name: string

    @IsNotEmpty({message: "O endereço não pode ser vazio!"})
    @MaxLength(60, {message: "O endereço precisa ter no máximo 60 caracteres!"})
    readonly adress: string

    @IsEmail()
    @MaxLength(30, {message: "O e-mail precisa ter no máximo 25 caracteres!"})
    @IsNotEmpty({message: "O e-mail é obrigatório!"})
    readonly email: string
}
   