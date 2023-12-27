import { useEffect } from 'react'
import { useProductContext } from '../../contexts/Products'
import ProductForm from '../ProductForm'

function CreateProduct() {
  const { createProduct, getCategories } = useProductContext()

  useEffect(() => {
    getCategories()
  }, [])
  

  return (
    <div className='px-5'>
      <ProductForm handleFunction={createProduct}/>
    </div>
  )
}

export default CreateProduct