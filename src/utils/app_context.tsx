import { createContext, useContext, useState } from 'react';

interface ProviderProps {
    children: React.ReactNode;
}

type ScreenName = 'HOME' | 'TRADES' | 'PROFILE' | 'NOTIFICATION' | 'AUTHENTICATION';

const AppContext = createContext<{
    notifications: number;
    setNotifications: React.Dispatch<React.SetStateAction<number>>;
    screen: ScreenName;
    setScreen: React.Dispatch<React.SetStateAction<ScreenName>>;
}>({
    notifications: 0,
    setNotifications: () => null,
    screen: 'HOME',
    setScreen: () => null
});

export const AppProvider: React.FC<ProviderProps> = ({ children }: ProviderProps) => {
    const [ notifications, setNotifications ] = useState(0);
    const [ screen, setScreen ] = useState<ScreenName>('HOME');

    return (
        <AppContext.Provider
            value={{
                notifications,
                setNotifications,
                screen,
                setScreen
            }}
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
