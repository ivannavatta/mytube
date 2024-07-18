import React, { createContext, useState } from 'react'

interface videoContextProps {
    url: string
    setUrl: React.Dispatch<React.SetStateAction<string>>
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>
}

interface videoProviderProps {
    children: React.ReactNode
}
export const VideoContext = createContext<videoContextProps | undefined>(undefined)

export const VideoProvider: React.FC<videoProviderProps> = ({ children }) => {
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    
  return (
    <VideoContext.Provider value={{ url, setUrl, title, setTitle }}>
    {children}
    </VideoContext.Provider>
  )
}
