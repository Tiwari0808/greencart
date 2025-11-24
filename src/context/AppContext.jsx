import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);

    return (
        <AppContext.Provider value={{ user, setUser, isSeller, setIsSeller }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => {
    return useContext(AppContext);
};