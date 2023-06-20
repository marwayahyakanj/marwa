import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionController } from './region.controller';
import { region } from './entities/region.entity';

@Module({
  imports: [TypeOrmModule.forFeature([region])],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule {}
