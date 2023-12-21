import { createContext, useContext } from 'react'
import { iProductContext, iProductContextProps } from './types'

const ProductContext = createContext<iProductContext>({} as iProductContext)

export const ProductProvider = ({ children }: iProductContextProps) => {
  return (
    <ProductContext.Provider 
      value={{}}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)