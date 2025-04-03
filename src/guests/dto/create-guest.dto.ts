import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateGuestDto{

    @IsString({message: "O nome precisa ser um texto!"})
    @MaxLength(20, {message: "O nome precisa ter no máximo 20 caracteres!"})
    @IsNotEmpty({message: "O nome não pode ser vazio!"})
    readonly name: string

    @IsString({message: "O CPF precisa ser um texto!"})
    @IsNotEmpty({message: "O CPF não pode ser vazio!"})
    @MaxLength(11, {message: "O Cpf precisa ter no máximo 11 caracteres!"})
    readonly cpf: string

    @IsString({message: "O endereço precisa ser um texto!"})
    @IsNotEmpty({message: "O endereço não pode ser vazio!"})
    @MaxLength(60, {message: "O endereço precisa ter no máximo 60 caracteres!"})
    readonly adress: string
}