import axios, { AxiosResponse } from 'axios';

const baseUrl: string = "http://localhost:4000"

export const getDatas = async (): Promise<IItem[]> => {
  try {
    const teams: AxiosResponse<ApiGetAllData> = await axios.get(
      baseUrl + "/get"
    )
    return teams.data.items
  } catch (error: any) {
    throw new Error(error)
  }
}

export const addData = async (
  addItem: IItem
) => {
  try {
    const saveData: AxiosResponse<ApiGetData> = await axios.post(
      baseUrl + "/add",
      addItem
    )
    return saveData.data
  } catch (error: any) {
    throw new Error(error)
  }
}
