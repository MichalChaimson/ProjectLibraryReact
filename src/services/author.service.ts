import axios from '../utils/axios';
import { AuthorType } from "../types/author.types";

export const getAllAuthor = async (): Promise<AuthorType[]> =>{
    const respons = await axios.get(`/Author`)
    return respons.data
}
export const getByNameAuthor = async (name:string): Promise<AuthorType> =>{
    const respons = await axios.get(`/Author/name/${name}`)
    return respons.data
}
export const getByAuthorId = async (id:number): Promise<AuthorType> =>{
    const respons = await axios.get(`/Author/id/${id}`)
    return respons.data
}