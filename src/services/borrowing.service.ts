import axios from '../utils/axios';
import { BorrowingType } from "../types/borrowing.types";

export const getAllBorrowing = async (): Promise<BorrowingType[]> =>{
    const respons = await axios.get(`/Borrowing`)
    return respons.data
}