import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class UpdateTaskDto{

    @IsString({message: "O nome precisa ser um texto! "})
    @MinLength(5, {message: "O nome precisa ter no minimo 5 caracteres!"})
    @MaxLength(20, {message: "O nome precisa ter no máximo 20 caracteres!"})
    @IsOptional()
    readonly name?: string

    @IsString({message: "A descrição precisa ser um texto!"})
    @IsNotEmpty({message: "A descrição não pode ser vazia!"})
    @MaxLength(100, {message: "A descrição precisa ter no máximo 100 caracteres!"})
    readonly description?: string

    @IsBoolean()
    @IsOptional()
    readonly completed?: boolean

}