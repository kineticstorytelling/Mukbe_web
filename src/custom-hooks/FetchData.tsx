import {useEffect, useState} from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }
    
    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, [])
    // no bracket, it would occur all the time, with the bracket, it will occur one time, if you add something in there, any time that thing changes, it will change

    return { contactData, getData:handleDataFetch }
}