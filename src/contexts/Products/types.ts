import { ReactNode } from 'react'

export interface iProductContext{
  createProduct(data: iProduct): Promise<void>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  getCategories(): Promise<void> 
  categories: iCategory[]
  getProducts(): Promise<void>
  products: iProductResponse[]
  product: iProductResponse
  setProduct: React.Dispatch<React.SetStateAction<iProductResponse>>
  productDetails: boolean
  setProductDetails: React.Dispatch<React.SetStateAction<boolean>>
}

export interface iProductContextProps {
  children: ReactNode
}

export interface iProduct {
  description?: string | undefined
  whenToTake?: string | undefined
  category_id: string
  name: string
  brand: string
  photoUrl: string
  price: number
}

export interface iProductResponse {
  description: string | undefined
  whenToTake: string | undefined
  category: string
  name: string
  brand: string
  photoUrl: string
  price: number
  id: number
}

export interface iCategory {
  id: number
  name: string
}