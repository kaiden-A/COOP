import { useContext } from "react";

export const ProductContext = useContext();


export function ProductProvider({children}){

    return(
        <ProductContext.Provider>
            {children}
        </ProductContext.Provider>
    )
}