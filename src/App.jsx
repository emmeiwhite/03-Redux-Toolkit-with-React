import PizzaView from './features/pizza/pizzaView'
import BurgerView from './features/burger/burgerView'
import { useDispatch, useSelector } from 'react-redux'
import { resetBurger } from './features/burger/burgerSlice'
import { resetPizza } from './features/pizza/pizzaSlice'

function App() {
  const totalOrders = useSelector(state => {
    let totalOrder = state.burger.burgerCount + state.pizza.pizzaCount
    return totalOrder
  })
  // console.log(totalOrders)
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetBurger())
    dispatch(resetPizza())
  }
  return (
    <>
      <main className="max-w-6xl mx-auto px-5 flex gap-10">
        <PizzaView />
        <BurgerView />
      </main>

      <div className="max-w-6xl mx-auto px-5 flex flex-col gap-10">
        <p className="text-3xl">TOTAL ORDERS COUNT: {totalOrders}</p>

        <button
          className="px-2 py-1 rounded bg-orange-300 hover:bg-orange-400 transition cursor-pointer max-w-[200px]"
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
