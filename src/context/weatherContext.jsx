/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback, useContext, createContext } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [searchPlace, setSearchPlace] = useState('London')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    const fetchLatLon = useCallback(async() => {
        setLoading(true)
        setError('')

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=b26672e98758e923e5d6e88c6a96164f&units=metric`)
            const dataLatLon = await response.json()
            // console.log(dataLatLon)
            if (dataLatLon.cod !== '404' && dataLatLon.message !== 'city not found') {
                setData(dataLatLon)
                setLoading(false)
                //console.log(dataLatLon)
            } else {
                setError("Você digitou o nome errado da cidade, tente novamente")
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        } 
    }, [searchPlace])

    useEffect(() => {
        fetchLatLon()
    }, [searchPlace, fetchLatLon])

    return (
        <AppContext.Provider
            value={{
                loading, data, setSearchPlace, error 
            }}
        >
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }