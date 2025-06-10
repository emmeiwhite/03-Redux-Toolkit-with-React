import PizzaView from './features/pizza/pizzaView'
import BurgerView from './features/burger/burgerView'
import { useDispatch, useSelector } from 'react-redux'
import { globalReset } from './features/global/globalSlice'
// import { resetBurger } from './features/burger/burgerSlice'
// import { resetPizza } from './features/pizza/pizzaSlice'

function App() {
  const totalOrders = useSelector(state => {
    let totalOrder = state.burger.burgerCount + state.pizza.pizzaCount
    return totalOrder
  })
  // console.log(totalOrders)
  const dispatch = useDispatch()

  const handleReset = () => {
    // dispatch(resetBurger())
    // dispatch(resetPizza())
    dispatch(globalReset())
  }
  return (
    <>
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-center text-4xl py-12">
          {' '}
          <span className="text-red-600">Pizza</span> &{' '}
          <span className="text-green-600">Burger</span> Shop
        </h1>

        <main className="flex flex-col md:flex-row gap-10 max-w-3xl mx-auto">
          <PizzaView />
          <BurgerView />
        </main>

        <div className="px-5 flex flex-col gap-10 mt-6 md:mt-10 text-center">
          <p className="text-3xl">TOTAL ORDERS COUNT: {totalOrders}</p>

          <button
            className="px-6 py-1.5 rounded bg-orange-300 hover:bg-orange-400 transition cursor-pointer max-w-[200px] mx-auto"
            onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App
