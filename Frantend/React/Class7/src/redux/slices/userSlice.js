import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        userName: "Ram",
    },
    reducers: {
        changeUserName: (state,action) => {
            state.userName = action.payload
                 console.log(action)
        },
        defaultName: (state,action) => {
          console.log(action)
            state.userName ="Ram"
        }
        // normal function and normal arrow function nhi bana sakte hai
        // function defaultName(state) {
        //     state.userName = "ram"
        // }
    }
})


export const { changeUserName,defaultName } = userSlice.actions

export default userSlice.reducer