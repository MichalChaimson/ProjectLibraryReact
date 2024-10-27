import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserType } from '../../types/user';

interface InitialState {
  user: UserType;
}
const initialState: InitialState = {
  user:{
    id: 0,
    UserName: "",
    password: "",
    phone: 0,
    email: "",
    borrowings: [],
  }
 
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSlice: (state, action: PayloadAction<UserType>) => {
      // state.id = action.payload.id;
      // state.UserName = action.payload.UserName;
      // state.password = action.payload.password;
      // state.phone = action.payload.phone;
      // state.email = action.payload.email;
      // state.borrowings = action.payload.borrowings;
      state.user=action.payload;
      
    },
    addUserSlice: (state, action: PayloadAction<UserType>) => {
      // state.id = action.payload.id;
      // state.UserName = action.payload.UserName;
      // state.password = action.payload.password;
      // state.phone = action.payload.phone;
      // state.email = action.payload.email;
      // state.borrowings = action.payload.borrowings;
      state.user=action.payload;

    },
    cleartUserSlice: (state) => {
      // state.id = 0;
      // state.UserName = "";
      // state.password = "";
      // state.phone = 0;
      // state.email = "";
      // state.borrowings = [];
      state.user={
        id: 0,
        UserName: "",
        password: "",
        phone: 0,
        email: "",
        borrowings: [],
      }
    }
  }
})

export const { setUserSlice, addUserSlice, cleartUserSlice } = userSlice.actions

export default userSlice.reducer



// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { UserType } from '../../types/user';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {users: [] as UserType[] },
//   reducers: {
//     setUserSlice: (state, action: PayloadAction<UserType[]>) => {
//       state.users = action.payload;
//     },
//     addUserSlice: (state, action: PayloadAction<UserType>) => {
//       state.users.push(action.payload);
//     },
//     updateUserSlice: (state, action: PayloadAction<UserType>) => {
//       const index = state.users.findIndex(user => action.payload.id);
//       state.users[index] = action.payload;
//     },
//     deleteUserSlice: (state, action: PayloadAction<number>) => {
//       state.users.splice(action.payload,1);
//     }
//   }
// })

// export const {setUserSlice, addUserSlice, updateUserSlice, deleteUserSlice} = userSlice.actions;
// export default userSlice.reducer


// --------------YAEL----------------
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { UserType } from '../../types/user';

// interface InitialState {
//   user: UserType;
// }

// const initialState: InitialState = {
//   user: {id: 0,
//     UserName: "",
//     password: "",
//     phone: 0,
//     email: "",
//     borrowings: [],}
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUsersSlice: (state, action: PayloadAction<UserType>) => {
//       state.user = action.payload;
//     },
//     addUserSlice: (state, action: PayloadAction<UserType>) => {
//       state.user=action.payload;
//     },
//     updateUserSlice: (state, action: PayloadAction<UserType>) => {
//       // const index = state.users.findIndex(user => user.id === action.payload.id);
//       // if (index !== -1) {
//         state.user = action.payload;
//       // }
//     },
//     // deleteUserSlice: (state) => {
//     //   state.user={};
//     // }
//   },
// });

// export const { setUsersSlice, addUserSlice, updateUserSlice } = userSlice.actions;
// export default userSlice.reducer;