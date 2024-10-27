import axios from '../utils/axios';
import { UserType } from '../types/user';

export const getByEmail = async (email: string): Promise<UserType> => {
    const respons = await axios.get(`/User/${email}`)
    return respons.data
}
export const getByName = async (name: string): Promise<UserType> => {
    const respons = await axios.get(`/User/${name}`)
    return respons.data
}
export const getByPhone = async (phone: number): Promise<UserType> => {
    const respons = await axios.get(`/User/${phone}`)
    return respons.data
}
export const GetByNamAndPassword = async (name: string,password:string): Promise<UserType> => {
    const respons = await axios.get(`/User/${name}/${password}`)
    return respons.data
}
export const addUser = async (firstName: string, lastName: string, password: string, email: string, phone: string): Promise<UserType> => {
    const respons = await axios.post(`/User`, { "userName": firstName + " " + lastName, "password": password, "email": email, "countRequests": 0, "phone": phone,"borrowings":[]})
    return respons.data
}
export const updateUser = async (UserToUpdate: UserType, userId: number): Promise<void> => {
    const respons = await axios.put(`/User/${userId}`, UserToUpdate)
   // return respons.data
}
export const deleteUser = async (userId: number): Promise<void> => {
    const respons = await axios.delete(`/User/${userId}`)
    return respons.data
}