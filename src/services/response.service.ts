import axios from '../utils/axios';
import { ResponseeType } from "../types/response.types"

export const getAllResponse = async (): Promise<ResponseType[]> => {
    const respons = await axios.get(`/Response`)
    return respons.data
}

export const addResponse = async (date: Date, description: string, userId: number, bookId: number): Promise<ResponseeType> => {
    const respons = await axios.post(`/Response`, { "date": date, "description": description, "userId": userId, "bookId": bookId })
    return respons.data

}
export const updateResponse = async (ResponseToUpdate: ResponseeType, id: number): Promise<void> => {
    const respons = await axios.put(`/Response/${id}`, ResponseToUpdate)
    return respons.data
}