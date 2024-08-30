import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly  dbService: DatabaseService) {}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.dbService.employee.create({
      data: createEmployeeDto,
    })
  }

  async findAll(role?:'INTERN'|'ENGINEER'|'ADMIN') {
    return this.dbService.employee.findMany({
      where: {
        role: role,
      },
    });
    return this.dbService.employee.findMany()
  }

  async findOne(id: number) {
    return this.dbService.employee.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.dbService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.dbService.employee.delete
    ({
      where: {
        id,
      },
    });
  }
}
