import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    const [isSeller, setIsSeller] = useState(false);
    const navigate  = useNavigate();

    return (
        <AppContext.Provider value={{ user, setUser, isSeller, setIsSeller,navigate }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => {
    return useContext(AppContext);
};