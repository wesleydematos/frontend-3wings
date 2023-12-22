import { useProductContext } from '../../contexts/Products'
import ProductForm from '../ProductForm'

function CreateProduct() {
  const { createProduct } = useProductContext()

  return (
    <div className='px-5'>
      <ProductForm handleFunction={createProduct}/>
    </div>
  )
}

export default CreateProduct