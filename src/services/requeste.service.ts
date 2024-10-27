import axios from '../utils/axios';
import { RequestType } from "../types/request.types";

export const addRequest = async (date: Date, bookId: number, userId: number): Promise<RequestType> => {

    const respons = await axios.post(`/Request`, { "date": date, "bookId": bookId, "userId": userId })
    return respons.data
}
export const deleteRequest = async (id: number): Promise<void> => {
    const respons = await axios.delete(`/Request/${id}`)
    return respons.data
}