import { PartialType } from "@nestjs/mapped-types"
import { CreateTeacherDto } from "./create-teacher.dto";
import { IsBoolean, IsOptional } from "class-validator";

export class UpdateTeacherDto extends PartialType(CreateTeacherDto){

    @IsBoolean()
    @IsOptional()
    readonly concurred?: boolean

}