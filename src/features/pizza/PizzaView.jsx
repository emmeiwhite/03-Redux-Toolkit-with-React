import { useDispatch, useSelector } from 'react-redux'
import { orderPizza, reStockPizza } from './pizzaSlice'
import ReStockForm from '../../components/ReStockForm'

const PizzaView = () => {
  const pizzaCount = useSelector(state => state.pizza.pizzaCount)
  const dispatch = useDispatch()

  const handleRestock = qty => {
    dispatch(reStockPizza(qty))
  }

  return (
    <div className="md:py-12">
      <h1 className="text-2xl">Pizza Component</h1>

      <p className="my-4">
        Pizza Count: <span className="text-xl font-bold">{pizzaCount}</span>
      </p>
      <div className="flex gap-4  items-center flex-wrap">
        <button
          disabled={pizzaCount === 0}
          className={`px-2 py-1 rounded transition  ${
            pizzaCount === 0
              ? 'bg-gray-300 cursor-not-allowed text-white'
              : ' bg-orange-300 hover:bg-orange-400 cursor-pointer'
          }`}
          onClick={() => dispatch(orderPizza())}>
          Order Pizza
        </button>
        {/* <button
          className="px-2 py-1 rounded bg-orange-300 hover:bg-orange-400 transition cursor-pointer"
          onClick={() => dispatch(reStockPizza(10))}>
          ReStock Pizzas
        </button> */}
        <ReStockForm onRestock={handleRestock} />
      </div>
    </div>
  )
}
export default PizzaView
