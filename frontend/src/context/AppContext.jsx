import React, { createContext, useState, useContext, useCallback } from 'react';

const AppContext = createContext({
    searchOpen: false,
    openSearch: () => {},
    closeSearch: () => {},
});

export const AppProvider = ({ children }) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const openSearch = useCallback(() => setSearchOpen(true), []);
    const closeSearch = useCallback(() => setSearchOpen(false), []);

    return (
        <AppContext.Provider value={{ searchOpen, openSearch, closeSearch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
export default AppContext;
