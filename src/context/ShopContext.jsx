import { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContexts = createContext(null);

const ShopContextProvider  =(props) =>{
    const contextValue = {all_product}

    return (
        <ShopContexts.Provider value={contextValue}>
             {props.children}
        </ShopContexts.Provider>
    )
}

export default ShopContextProvider