import { useDispatch, useSelector } from 'react-redux'
import { orderPizza, reStockPizza } from './pizzaSlice'

const PizzaView = () => {
  const pizzaCount = useSelector(state => state.pizza.pizzaCount)
  const dispatch = useDispatch()
  return (
    <div className="py-12">
      <h1 className="text-2xl">Pizza Component</h1>

      <p className="my-4">
        Pizza Count: <span className="text-xl font-bold">{pizzaCount}</span>
      </p>
      <div className="flex gap-4">
        <button
          className="px-2 py-1 rounded bg-orange-300 hover:bg-orange-400 transition cursor-pointer"
          onClick={() => dispatch(orderPizza())}>
          Order Pizza
        </button>
        <button
          className="px-2 py-1 rounded bg-orange-300 hover:bg-orange-400 transition cursor-pointer"
          onClick={() => dispatch(reStockPizza(10))}>
          ReStock Pizzas
        </button>
      </div>
    </div>
  )
}
export default PizzaView
