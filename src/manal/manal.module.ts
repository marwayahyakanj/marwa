import { Module } from '@nestjs/common';
import { ManalService } from './manal.service';
import { ManalController } from './manal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manal } from './entities/manal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manal])],
  controllers: [ManalController],
  providers: [ManalService]
})
export class ManalModule {}
