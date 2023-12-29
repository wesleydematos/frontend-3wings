import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { iProductFormProps } from './types'
import { useProductContext } from '../../contexts/Products'
import productSchema from '../../schemas/productSchema'
import Loading from '../Loading'

function ProductForm({handleFunction}: iProductFormProps) {
  const { loading, categories, product } = useProductContext()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(productSchema)})

  return  (
    <>
      {
        loading ? 
        <Loading/>
        :
        <form onSubmit={handleSubmit(handleFunction)}>
          <div className='flex flex-col mb-2'>
            <label className='font-semibold text-[16px] mb-1' htmlFor='category_id'>Categoria</label>
            <select 
              {...register('category_id')}
              name='category_id' 
              id='category_id' 
              className='h-[35px] text-black rounded-lg pl-2'
            >
              { categories.length > 0 && categories.map((category) => <option value={category.id} key={category.id}>{category.name}</option>) }
            </select>
            {errors.category_id && <span className='text-accent'>{errors.category_id.message}</span>}
          </div>
          <div className='flex flex-col mb-2'>
            <label className='font-semibold text-[16px] mb-1' htmlFor='name'>Nome</label>
            <input 
              {...register('name')}
              type='text' 
              placeholder='ex: Whey Protein' 
              className='h-[35px] text-black rounded-lg pl-2'
              id='name'
              defaultValue={product.name || ""}
            />
            {errors.name && <span className='text-accent'>{errors.name.message}</span>}
          </div>
          <div className='flex flex-col mb-2'>
            <label className='font-semibold text-[16px] mb-1' htmlFor='photoUrl'>URL da imagem</label>
            <input 
              {...register('photoUrl')}
              type='text' 
              placeholder='ex: https://...' 
              className='h-[35px] text-black rounded-lg pl-2'
              id='photoUrl'
              defaultValue={product.photoUrl || ""}
            />
            {errors.photoUrl && <span className='text-accent'>{errors.photoUrl.message}</span>}
          </div>        
          <div className='flex flex-col mb-2'>
            <label className='font-semibold text-[16px] mb-1' htmlFor='description'>Descrição</label>
            <input 
              {...register('description')}
              type='text' 
              placeholder='ex: O produto contém...' 
              className='h-[35px] text-black rounded-lg pl-2'
              id='description'
              defaultValue={product.description || ""}
            />
            {errors.description && <span className='text-accent'>{errors.description.message}</span>}
          </div>
          <div className='flex flex-col mb-2'>
            <label className='font-semibold text-[16px] mb-1' htmlFor='whenToTake'>Quando utilizar</label>
            <input 
              {...register('whenToTake')}
              type='text' 
              placeholder='ex: O produto deve ser utilizado...' 
              className='h-[35px] text-black rounded-lg pl-2'
              id='whenToTake'
              defaultValue={product.whenToTake || ""}
            />
            {errors.whenToTake && <span className='text-accent'>{errors.whenToTake.message}</span>}
          </div>
          <div className='flex flex-col mb-2'>
            <label className='font-semibold text-[16px] mb-1' htmlFor='brand'>Marca</label>
            <input 
              {...register('brand')}
              type='text' 
              placeholder='ex: Growth' 
              className='h-[35px] text-black rounded-lg pl-2'
              id='brand'
              defaultValue={product.brand || ""}
            />
            {errors.brand && <span className='text-accent'>{errors.brand.message}</span>}
          </div>
          <div className='flex flex-col mb-2'>
            <label className='font-semibold text-[16px] mb-1' htmlFor='price'>Preço</label>
            <input 
              {...register('price')}
              type='text' 
              placeholder='ex: 150' 
              className='h-[35px] text-black rounded-lg pl-2'
              id='price'
              defaultValue={product.price || ""}
            />
            {errors.price && <span className='text-accent'>Preço do produto deve ser um número positivo e é obrigatório!</span>}
          </div>
          
          <div className='my-2'>
            <button 
              type='submit'
              className='flex items-center gap-2 text-sm text-white mt-6 border border-white p-2 rounded-2xl hover:border-tertiary-light hover:text-tertiary-light'
            >
              Enviar dados
            </button>
          </div>
        </form>
      }
    </>
  )
}

export default ProductForm