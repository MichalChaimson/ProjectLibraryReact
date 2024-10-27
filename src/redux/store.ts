import { configureStore } from "@reduxjs/toolkit"
import authReducer from './auth/auth.slice'
import authorReducer from './author/author.slice'
import bookReducer from './book/book.slice'
import borrowingReducer from './borroring/borrowing.slice'
import requestReducer from './request/request.slice'
import responseReducer from './response/response.slice'
import userReducer  from './user/user.slice'
import { TypedUseSelectorHook, useSelector } from "react-redux"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        author: authorReducer,
        book: bookReducer,
        borrowing: borrowingReducer,
        request: requestReducer,
        response: responseReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector