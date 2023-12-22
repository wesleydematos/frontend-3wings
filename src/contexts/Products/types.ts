import { ReactNode } from 'react'

export interface iProductContext{
  createProduct(data: iProduct): Promise<void>
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