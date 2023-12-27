import { createContext, useContext, useState } from 'react'
import { iProduct, iProductContext, iProductContextProps } from './types'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const ProductContext = createContext<iProductContext>({} as iProductContext)

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  async function createProduct(data: iProduct){
    try {
      await api.post<iProduct>("/products", data)
      toast.success("Produto criado com sucesso!")
    } catch (error) {
      toast.error("Falha ao criar produto.")
    } 
  }

  async function getCategories(){
    setLoading(true)
    
    try {
      const { data } = await api.get("/categories")
      setCategories(data)
      setLoading(false)
    } catch (error) {
      console.error("Falha ao buscar categorias.", error)
    } 
  }

  async function getProducts(){
    setLoading(true)
    
    try {
      const { data } = await api.get("/products")
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.error("Falha ao buscar produtos.", error)
    } 
  }

  return (
    <ProductContext.Provider 
      value={{ 
        createProduct,
        loading,
        setLoading, 
        getCategories,
        categories,
        getProducts,
        products
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)