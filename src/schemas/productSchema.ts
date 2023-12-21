import * as yup from 'yup'

export const ProductSchema = yup.object({
  category_id: yup.string().required('Categoria do produto obrigatória!').trim(),
  name: yup.string().required('Nome do produto obrigatório!').max(50, 'Número máximo de caracteres: 50.').trim(),
  brand: yup.string().required('Categoria do produto obrigatória!').max(50, 'Número máximo de caracteres: 50.').trim(),
  photoUrl: yup.string().required('Foto do produto obrigatória!').trim(),
  price: yup.number().required('Preço do produto obrigatório!'),
  description: yup.string().max(250, 'Número máximo de caracteres: 250.').trim(),
  whenToTake: yup.string().max(250, 'Número máximo de caracteres: 250.').trim()
})