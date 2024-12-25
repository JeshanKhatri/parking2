import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';

    //  the parking data
    const parking = [
        { id: '1', name: 'Parking Lot A', fees: 50, location: 'Location A' },
        { id: '2', name: 'Parking Lot B', fees: 150, location: 'Location B' },
        // Add more parking objects as needed
    ];

    const value = {
        currencySymbol,
        parking 
    };

    return (
        <AppContext.Provider value={value}>
            {props.children} {/* Using props.children to render child components */}
        </AppContext.Provider>
    );
}

export default AppContextProvider;