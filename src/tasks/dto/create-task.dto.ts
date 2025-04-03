/*
DTO (Data Transfer Object) - Objeto de Tranferencia de Dados 
Objetivo: Validar dados, transformar.
É utilizado para representar quais dados e em que formatos uma determinada camada aceita e trabalha
*/

import { MESSAGES } from "@nestjs/core/constants"
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateTaskDto{
    @IsString({message: "O nome precisa ser um texto!"})
    @MaxLength(20, {message: "O nome precisa ter no máximo 20 caracteres!"})
    @IsNotEmpty({message: "O nome não pode ser vazio!"})
    readonly name: string

    @IsString({message: "A descrição precisa ser um texto!"})
    @IsNotEmpty({message: "A descrição não pode ser vazia!"})
    @MaxLength(100, {message: "A descrição precisa ter no máximo 100 caracteres!"})
    readonly description: string

}
