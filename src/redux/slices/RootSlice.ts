import {createSlice} from '@reduxjs/toolkit'
import { useActionData } from 'react-router-dom'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name:"Name",
        cost: "Cost",
        store: "Store"
    },
    reducers:{
        chooseName: (state,action)=>{ state.name = action.payload },
        chooseCost: (state, action) => { state.cost = action.payload },
        chooseStore: (state, action) => { state.store = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseCost, chooseStore} = rootSlice.actions;