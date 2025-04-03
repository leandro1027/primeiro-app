import { IsNotEmpty, IsString, MaxLength, Min, MinLength } from "class-validator"

export class CreateTeacherDto{

    @IsString({message: "O nome precisa ser um texto!"})
    @MinLength(5, {message: "O nome precisa ter no minimo 5 caracteres!"})
    @MaxLength(20, {message: "O nome precisa ter no máximo 20 caracteres!"})
    @IsNotEmpty({message: "O nome não pode ser vazio!"})
    readonly name: string

    @IsNotEmpty({message: "O salário não pode ser vazio!"})
    readonly wage: string

    @IsNotEmpty({message: "A matricula não pode ser vazia!"})
    readonly register: string
}
   