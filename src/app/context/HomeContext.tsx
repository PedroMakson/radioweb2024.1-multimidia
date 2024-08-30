'use client'

import React, {createContext, ReactNode, useState} from 'react';

type HomeContextData = {
    playing: boolean;
    togglePlaying: () => void;
}

export const HomeContext = createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;
}

const HomeContextProvider = ({children}: ProviderProps) => {
    const [playing, setPlaying] = useState(false);

    const togglePlaying = () => {
        setPlaying(!playing);
    }

    return (
        <HomeContext.Provider value={{ playing, togglePlaying }}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;
