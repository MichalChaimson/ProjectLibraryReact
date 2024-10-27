import { BorrowingType } from "./borrowing.types"

export type UserType = {
    id:number, 
    UserName:string,
    password:string 
    phone:number,
    email:string,
    borrowings:BorrowingType[],
}