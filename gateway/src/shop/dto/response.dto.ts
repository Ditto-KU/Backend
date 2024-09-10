import { ApiProperty } from '@nestjs/swagger';

export class CreateCanteenResponseDto {
  @ApiProperty()
  canteenId: number
  @ApiProperty()
  name: string
  @ApiProperty()
  latitude: number
  @ApiProperty()
  longitude: number
}
export class CreateShopResponseDto {
  @ApiProperty()
  shopId: number
  @ApiProperty()
  username: string
  @ApiProperty({description: 'password is hashed'})
  password: string
  @ApiProperty()
  shopName: string
  @ApiProperty()
  profilePicture: string
  @ApiProperty()
  tel: string
  @ApiProperty()
  shopNumber: string
  @ApiProperty({description: 'status default is "false", mean shop is close'})
  status: string
  @ApiProperty()
  canteenId: number
}

export class CreateMenuResponseDto {
  @ApiProperty()
  menuId: number
  @ApiProperty()
  name: string
  @ApiProperty()
  picture: string
  @ApiProperty()
  price: number
  @ApiProperty()
  description: string
  @ApiProperty({description: 'status default is "false", mean menu is not available'})
  status: boolean
  @ApiProperty()
  shopId: number
}

export class EditMenuResponseDto extends CreateMenuResponseDto {}

export class DeleteMenuResponseDto extends CreateMenuResponseDto {}

export class GetMenuResponseDto extends CreateMenuResponseDto {}

export class GetMenuInfoResponseDto extends CreateMenuResponseDto {}

export class OptionItem {
  @ApiProperty()
  name: string
  @ApiProperty()
  price: number
}

export class CreateOptionResponseDto {
  @ApiProperty()
  optionId: number
  @ApiProperty()
  menuId: number
  @ApiProperty()
  name: string
  @ApiProperty()
  mushChoose: boolean
  @ApiProperty()
  maxChoose: number
  @ApiProperty()
  minChoose: number
  @ApiProperty({type: [OptionItem]})
  optionItems: OptionItem
}

export class EditOptionResponseDto extends CreateOptionResponseDto {}

export class DeleteOptionResponseDto extends CreateOptionResponseDto {}

export class GetOptionResponseDto extends CreateOptionResponseDto {}

export class GetOptionInfoResponseDto extends CreateOptionResponseDto {}

export class SearchShopResponseDto {
  @ApiProperty()
  shopId: number
  @ApiProperty()
  shopname: string
  @ApiProperty({description: 'encoded in base64'})
  profilePicture: string
  @ApiProperty({description: 'true is open, false is close'})
  status: Boolean
}

export class Requester {
  @ApiProperty()
  username: string
  @ApiProperty()
  profilePicture: string
}

export class GetShopReviewResponseDto {
  @ApiProperty()
  rating: number
  @ApiProperty()
  comment: string
  @ApiProperty({ type: Requester })
  requester: Requester;
}

export class CreateSpecialOperatingHoursResponseDto {
  @ApiProperty()
  specialOperatingHoursId: number
  @ApiProperty()
  date: Date
  @ApiProperty()
  open: string
  @ApiProperty()
  close: string
  @ApiProperty()
  shopId: number
}
export class DayOfWeek {
  @ApiProperty()
  day: string
  @ApiProperty()
  open: string
  @ApiProperty()
  close: string
}

export class CreateScheduleResponseDto {
  @ApiProperty()
  scheduleId: number
  @ApiProperty({type: [DayOfWeek]})
  dayOfWeek: DayOfWeek
  @ApiProperty()
  shopId: number
}

export class GetScheduleResponseDto extends CreateScheduleResponseDto {}

export class GetSpecialOperatingHoursResponseDto extends CreateSpecialOperatingHoursResponseDto {}