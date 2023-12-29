import { useProductContext } from '../../contexts/Products'
import { iProductResponse } from '../../contexts/Products/types'

function DeleteModal() {
  const { setExclude, setProduct, product, deleteProduct } = useProductContext()

  return (
    <div className='fixed top-0 h-screen w-screen bg-[#00000080] flex items-center justify-center z-400'>
      <div className='flex flex-col justify-center w-[90%] h-[50%] p-2 md:p-5 bg-tx rounded-lg'>
        <button 
          onClick={()=>{setExclude(false); setProduct({} as iProductResponse)}}
          className='absolute top-[29vh] right-[8vw] font-bold text-white'
        >
          X
        </button>
        <div className='flex flex-col self-center'>
          <p className='font-bold text-xl text-center text-white'>
            Tem certeza que deseja excluir o produto {`${product.name} da ${product.brand}?`}
          </p>
          <div className='flex self-center gap-2 mt-3'>
            <button 
              className='bg-accent rounded text-white px-4 py-2'
              onClick={()=>{deleteProduct(product.id); setExclude(false)}}
            >
              Excluir
            </button>
            <button 
              className='bg-primary rounded text-white px-4 py-2'
              onClick={()=>{setExclude(false); setProduct({} as iProductResponse)}}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal