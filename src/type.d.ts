type IItem = {
  firstname: string
  lastname: string
  email: string
  address: string
  latitude: number
  longitude: number
  occupation: string
}

type ApiGetData = {
  message: string
  item: IItem
}

type ApiGetAllData = {
  message: string
  items: IItem[]
}
