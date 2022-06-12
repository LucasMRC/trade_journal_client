import { createContext, useContext, useState } from 'react';

interface ProviderProps {
    children: React.ReactNode;
}

const AppContext = createContext<{
    notifications: number;
    setNotifications: React.Dispatch<React.SetStateAction<number>>;
}>({
    notifications: 0,
    setNotifications: () => null
});

export const AppProvider: React.FC<ProviderProps> = ({ children }: ProviderProps) => {
    const [ notifications, setNotifications ] = useState(0);

    return (
        <AppContext.Provider
            value={{ notifications, setNotifications }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }

    return context;
};
