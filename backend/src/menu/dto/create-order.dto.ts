export class CreateOrderDTO {
  readonly user: string
  readonly dishes: []
  readonly line: number
  readonly price: number
}