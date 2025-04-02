import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { CreateTaskDto } from "./create-task.dto"

export class UpdateTaskDto extends CreateTaskDto{

    @IsBoolean()
    @IsOptional()
    readonly completed?: boolean

}