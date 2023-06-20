import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { region } from './entities/region.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(region)
    private regionsRepository: Repository<region>,
  ) {}

  create(createregionDto: CreateRegionDto) {
    const regionRaw = this.regionsRepository.create(createregionDto);
    return this.regionsRepository.save(regionRaw)
  }

  findAll() {
    return this.regionsRepository.find();;
  }

  findOne(id: number) {
    return `This action returns a #${id} region`;
  }

  update(id: number, updateManalDto: UpdateRegionDto) {
    return `This action updates a #${id} region`;
  }

  remove(id: number) {
    return `This action removes a #${id} region`;
  }













  
}
