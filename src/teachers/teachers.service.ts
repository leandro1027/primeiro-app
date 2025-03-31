import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
    private teachers: Teacher[] = [
        {
            id: 1,
            name: "Leandro",
            wage: "10000",
            matricula: "1",
        }
    ];

    findAll() {
        return this.teachers;
    }

    findOne(id: string) {
        const teacher = this.teachers.find(teacher => teacher.id === Number(id));

        if (teacher) return teacher;

        throw new HttpException("Esse professor não existe!", HttpStatus.NOT_FOUND);
    }

    create(createTeacherDto: CreateTeacherDto) {
        const newId = this.teachers.length + 1

        const newTeacher = {
            id: newId,
            ...createTeacherDto,
        };

        this.teachers.push(newTeacher);

        return newTeacher;
    }

    update(id: string, updateTeacherDto: UpdateTeacherDto) {
        const teacherIndex = this.teachers.findIndex(teacher => teacher.id === Number(id))

        if (teacherIndex < 0)
            throw new HttpException("Esse professor não existe!", HttpStatus.NOT_FOUND);

        const teacherItem = this.teachers[teacherIndex];

        this.teachers[teacherIndex] = {
            ...teacherItem,
            ...updateTeacherDto,
        };

        return this.teachers[teacherIndex];
    }

    remove(id: string) {
        const teacherIndex = this.teachers.findIndex(teacher => teacher.id === Number(id))

        if (teacherIndex < 0)
            throw new HttpException("Esse professor não existe!", HttpStatus.NOT_FOUND);

        this.teachers.splice(teacherIndex, 1);

        return "Professor deletado!";
    }
}
