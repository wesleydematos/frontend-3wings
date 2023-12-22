import { iProduct } from '../../contexts/Products/types'
import ProductForm from '../ProductForm'

function CreateProduct() {
  function createProduct(data: iProduct){
    console.log(data)
  }

  return (
    <div className='px-5'>
      <ProductForm handleFunction={createProduct}/>
    </div>
  )
}

export default CreateProduct