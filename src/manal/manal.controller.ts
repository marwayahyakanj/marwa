import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManalService } from './manal.service';
import { CreateManalDto } from './dto/create-manal.dto';
import { UpdateManalDto } from './dto/update-manal.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('marwa')
@Controller('manal')
export class ManalController {
  constructor(private readonly manalService: ManalService) {}

  @Post()
  create(@Body() createManalDto: CreateManalDto) {
    return this.manalService.create(createManalDto);
  }

  @Get()
  findAll() {
    return this.manalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManalDto: UpdateManalDto) {
    return this.manalService.update(+id, updateManalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.manalService.remove(+id);
  }
}
