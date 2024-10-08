import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsString } from "class-validator"

export class UpdateShopStatusRequestDto {
  authId: string
  @ApiProperty()
  @IsBoolean()
  status: boolean
}