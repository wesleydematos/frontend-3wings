import { useProductContext } from '../../contexts/Products'

function ProductDetails() {
  const { product, setProductDetails } = useProductContext()
  const { name, photoUrl, brand, price, description, whenToTake } = product

  return (
    <div className='fixed h-full w-full bg-[#00000080] flex items-center justify-center z-40'>
      <div className='flex flex-col w-[90%] h-[95%] p-2 md:p-5 bg-white rounded-lg'>
        <button onClick={()=> setProductDetails(false)} className='absolute top-[4vh] right-[7vw] font-bold text-secondary'>
          X
        </button>
        <div className='h-[150px] md:h-[200px] lg:h-[250px] flex self-center'>
          <img src={photoUrl} alt={name} className='h-[150px] w-[150px] md:h-[165px] md:w-[165px] lg:h-[200px] lg:w-[200px] 
          self-center hover:scale-125' />
        </div>
        <p className='font-bold text-center md:text-xl text-secondary'>
          {`${name} ${brand}`}
        </p>
        <p className='text-sm text-center mb-2 md:mb-4 md:text-xl font-medium text-secondary'>
          {`R$${price},00`}
        </p>
        {
          description ? 
          <p className='mx-8 text-[12px] text-justify mb-2 md:mb-4 md:text-xl text-primary'>
            <span className='font-bold text-secondary'>Descrição: </span> 
            {description}
          </p>
          :
          <span className='font-bold text-accent text-center text-[12px] md:text-xl mt-5'>Produto sem descrição</span> 
        }
        {
          whenToTake ? 
          <p className='mx-8 text-[12px] text-justify md:text-xl text-primary'>
            <span className='font-bold text-secondary'>Como Usar: </span>
            {whenToTake}
          </p>
          :
          <span className='font-bold text-accent text-center text-[12px] md:text-xl'>Produto sem instruções de uso</span> 
        }
      </div>
    </div>
  )
}

export default ProductDetails