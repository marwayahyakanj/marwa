import { Injectable } from '@nestjs/common';
import { CreateManalDto } from './dto/create-manal.dto';
import { UpdateManalDto } from './dto/update-manal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Manal } from './entities/manal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ManalService {

  constructor(
    @InjectRepository(Manal)
    private manalsRepository: Repository<Manal>,
  ) {}

  create(createManalDto: CreateManalDto) {
    const manalRaw = this.manalsRepository.create(createManalDto);
    return this.manalsRepository.save(manalRaw)
  }

  findAll() {
    return this.manalsRepository.find();;
  }

  findOne(id: number) {
    return `This action returns a #${id} manal`;
  }

  update(id: number, updateManalDto: UpdateManalDto) {
    return `This action updates a #${id} manal`;
  }

  remove(id: number) {
    return `This action removes a #${id} manal`;
  }
}
