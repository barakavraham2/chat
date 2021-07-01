import { createSlice } from '@reduxjs/toolkit'

const UISlice = createSlice({
    name: 'UI',
    initialState: {
        isLoading: true,
    }
    ,
    reducers: {
        EndOfLoading(state, action) {
            state.isLoading = false
        },
        startOfLoadin(state, action) {
            state.isLoading = true
        }
    }

})
export const UIActions = UISlice.actions;
export default UISlice