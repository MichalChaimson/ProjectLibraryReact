import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { UserType2 } from "../../types/user.types";
import { removeSession } from "../../auth/utils";
type AuthStateType = {
    user: UserType2 | null,
    isAuthenticated: boolean,  // או מחובר או לא מחובר 
    isInitialized: boolean //  ( אם כבר בדק אם אני מחובר או לא)   אם קרה אתחול
}
const initialState: AuthStateType = {
    user: null,
    isAuthenticated: false,
    isInitialized: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state: AuthStateType, action: PayloadAction<UserType2>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isInitialized = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isInitialized = false;
            removeSession()
        },
        setInitialized: (state: AuthStateType) => {
            state.isInitialized = true;
        }
    }
})
export const { setUser, setInitialized ,clearUser} = authSlice.actions

export default authSlice.reducer

