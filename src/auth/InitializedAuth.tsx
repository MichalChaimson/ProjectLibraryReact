import { ReactNode, useEffect } from "react"
import { useDispatch } from "react-redux"
import { AuthUserType } from "../types/user.types"
import { getSession, isValidToken, setSession } from "./utils"
import { setInitialized, setUser } from "../redux/auth/auth.slice"
import { UserType } from "../types/user"
import { GetByNamAndPassword } from "../services/user.service"
import { setUserSlice } from "../redux/user/user.slice"

export default function InitializedAuth() {

    const dispatch = useDispatch()

    useEffect(() => {
        const authUser: AuthUserType | null = getSession()
        if (authUser && isValidToken(authUser.token)) {
            dispatch(setUser(authUser.user))// שמירת הנתונים ברידקס
            setSession(authUser)
        }
        dispatch(setInitialized())
    }, [])
    return null;
}
