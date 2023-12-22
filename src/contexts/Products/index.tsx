import { createContext, useContext } from 'react'
import { iProduct, iProductContext, iProductContextProps } from './types'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const ProductContext = createContext<iProductContext>({} as iProductContext)

export const ProductProvider = ({ children }: iProductContextProps) => {
  async function createProduct(data: iProduct){
    try {
      await api.post<iProduct>("/products", data)
      toast.success("Produto criado com sucesso!")
    } catch (error) {
      toast.error("Falha ao criar produto.")
    } 
  }

  return (
    <ProductContext.Provider 
      value={{ 
        createProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)