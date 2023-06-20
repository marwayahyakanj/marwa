import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
    @ApiProperty({
        example:  "حلب"
    })
    name: string;

}
