import { PartialType } from '@nestjs/swagger';
import { CreateManalDto } from './create-manal.dto';

export class UpdateManalDto extends PartialType(CreateManalDto) {}
