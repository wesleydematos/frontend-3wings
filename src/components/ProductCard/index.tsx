import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import { iProductResponse } from '../../contexts/Products/types'
import { useProductContext } from '../../contexts/Products'

function ProductCard({ product }: { product: iProductResponse }) {
  const { setProduct, setProductDetails, setEdit, setExclude } = useProductContext()
  const { name, photoUrl, brand, price } = product

  return (
    <li className='flex flex-col items-center px-[30px] py-3 bg-white w-[250px] rounded-xl shadow-xl text-tx'>
      <div className='flex items-start'>
        <button 
          className='hover:text-accent'
          onClick={() => {setExclude(true); setProduct(product)}}
        >
          <FaTrashAlt />
        </button>
        <img src={photoUrl} alt={name} className='w-[150px] h-[150px] hover:scale-110'/>
        <button 
          className='hover:text-primary-hover'
          onClick={() => {setEdit(true); setProduct(product)}}
        >
          <FaPencilAlt />
        </button>
      </div>
      <p className='max-w-[200px] truncate font-bold mt-2'>{`${name} ${brand}`}</p>
      <span className='text-sm font-medium'>R${price},00</span>
      <button 
        type='button' 
        className='text-white bg-gradient-to-br from-[#3fe35d] to-secondary hover:bg-gradient-to-bl font-medium 
        rounded-lg text-sm px-10 py-2.5 text-center mt-3' 
        onClick={() => {setProductDetails(true); setProduct(product)}}
      >
        Ver detalhes
      </button>
    </li>
  )
}

export default ProductCard