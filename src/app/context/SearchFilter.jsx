import { createContext , useState } from 'react'

export const SearchFilterContext = createContext()

export const SearchFilterProvider = ({ children }) => {
    const [searchFilter, setSearchFilter] = useState('')
    return (
        <SearchFilterContext.Provider value={{searchFilter, setSearchFilter}}>
            {children}
        </SearchFilterContext.Provider>
    )
}
