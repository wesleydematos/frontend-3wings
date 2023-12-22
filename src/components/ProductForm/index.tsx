import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import productSchema from '../../schemas/productSchema'
import { iProductFormProps } from './types'

function ProductForm({handleFunction}: iProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(productSchema)})

  return  (
    <>
      <form onSubmit={handleSubmit(handleFunction)}>
        <div className='flex flex-col mb-2'>
          <label className='font-medium  text-[14px]' htmlFor='category_id'>Categoria</label>
          <select 
            {...register('category_id')}
            name='category_id' 
            id='category_id' 
            className='h-[35px] text-black'
          >
            <option value='1'>Proteína</option>
            <option value='2'>Pré-treino</option>
            <option value='3'>Creatina</option>
            <option value='4'>Outros</option>
          </select>
          {errors.category_id && <span className='text-accent'>{errors.category_id.message}</span>}
        </div>
        <div className='flex flex-col mb-2'>
          <label className='font-medium text-[14px]' htmlFor='name'>Nome</label>
          <input 
            {...register('name')}
            type='text' 
            placeholder='ex: Whey Protein' 
            className='h-[35px] text-black'
            id='name'
          />
          {errors.name && <span className='text-accent'>{errors.name.message}</span>}
        </div>
        <div className='flex flex-col mb-2'>
          <label className='font-medium text-[14px]' htmlFor='photoUrl'>URL da imagem</label>
          <input 
            {...register('photoUrl')}
            type='text' 
            placeholder='ex: https://...' 
            className='h-[35px] text-black'
            id='photoUrl'
          />
          {errors.photoUrl && <span className='text-accent'>{errors.photoUrl.message}</span>}
        </div>        
        <div className='flex flex-col mb-2'>
          <label className='font-medium text-[14px]' htmlFor='description'>Descrição</label>
          <input 
            {...register('description')}
            type='text' 
            placeholder='ex: O produto contém...' 
            className='h-[35px] text-black'
            id='description'
          />
          {errors.description && <span className='text-accent'>{errors.description.message}</span>}
        </div>
        <div className='flex flex-col mb-2'>
          <label className='font-medium text-[14px]' htmlFor='whenToTake'>Quando utilizar</label>
          <input 
            {...register('whenToTake')}
            type='text' 
            placeholder='ex: O produto deve ser utilizado...' 
            className='h-[35px] text-black'
            id='whenToTake'
          />
          {errors.whenToTake && <span className='text-accent'>{errors.whenToTake.message}</span>}
        </div>
        <div className='flex flex-col mb-2'>
          <label className='font-medium text-[14px]' htmlFor='brand'>Marca</label>
          <input 
            {...register('brand')}
            type='text' 
            placeholder='ex: Growth' 
            className='h-[35px] text-black'
            id='brand'
          />
          {errors.brand && <span className='text-accent'>{errors.brand.message}</span>}
        </div>
        <div className='flex flex-col mb-2'>
          <label className='font-medium text-[14px]' htmlFor='price'>Preço</label>
          <input 
            {...register('price')}
            type='text' 
            placeholder='ex: 150' 
            className='h-[35px] text-black'
            id='price'
          />
          {errors.price && <span className='text-accent'>Preço do produto deve ser um número positivo e é obrigatório!</span>}
        </div>
        
        <div className='my-2'>
          <button type='submit'>enviar</button>
        </div>
      </form>
    </>
  )
}

export default ProductForm