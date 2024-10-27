import {categoryType} from '../types/category.types'
import {genreType} from '../types/genre.types'
import { bookType } from "../types/book.types";
import axios from '../utils/axios';

export const getAllBooks = async (): Promise<bookType[]> =>{
    const respons = await axios.get(`/Book`)
    return respons.data
}
export const getByCategory = async (category:categoryType): Promise<bookType[]> =>{
    const respons = await axios.get(`/Book/category/${category}`)
    return respons.data
}
export const getByGenre = async (genre:genreType): Promise<bookType[]> =>{
    const respons = await axios.get(`/Book/gener/${genre}`)
    return respons.data
}
export const getByName = async (name: string): Promise<bookType> =>{
    const respons = await axios.get(`/Book/name/${name}`)
    return respons.data
}
export const getById = async (id: number): Promise<bookType> =>{
    const respons = await axios.get(`/Book/id/${id}`)
    return respons.data
}