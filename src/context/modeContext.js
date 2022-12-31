import React, { createContext, useContext, useState, useMemo } from 'react'

const modeContext = createContext(null)

export const useMode = () => useContext(modeContext)


export function ProviderMode({ children }) {
    const value = _useMode()
    return <modeContext.Provider value={children}></modeContext.Provider>
}
export const _useMode = () => {
    const [mode, setMode] = useState('Home')

    const setActiveMode = (value) => {
        setMode(value)
    }

    return useMemo(() => {
        mode, setActiveMode
    }, [mode])
}