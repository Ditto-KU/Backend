export class CreateAddressRequestDto {
    name: string
    detail: string
    note: string
    latitude: number
    longitude: number
    authId: string
    default: boolean
}