import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productSlice'

const ProductView = () => {
  // I have to dispatch fetchProducts
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    // Dispatching Async Actions to fetch data
    dispatch(fetchProducts())
  }, [])

  if (product.loading) return <p>Loading ...</p>

  if (product.error) return <p>Error ...</p>
  return (
    <div>
      <h2 className="text-2xl my-12 font-semibold">List of Products</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 py-10 ">
        {product.products.map(item => {
          return (
            <div
              key={item.id}
              className="shadow shadow-gray-300 px-5 py-3 hover:bg-amber-50 cursor-pointer">
              <img
                src={item.image}
                alt={item.description}
                className="w-[100px] h-[100px] object-scale-down "
              />
              <h2 className="text-clamp"> {item.title}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ProductView
