import PizzaView from './features/pizza/pizzaView'
import BurgerView from './features/burger/burgerView'
import { useSelector } from 'react-redux'

function App() {
  const totalOrders = useSelector(state => {
    let totalOrder = state.burger.burgerCount + state.pizza.pizzaCount
    return totalOrder
  })
  console.log(totalOrders)
  return (
    <>
      <main className="max-w-6xl mx-auto px-5 flex gap-10">
        <PizzaView />
        <BurgerView />
      </main>

      <div className="max-w-6xl mx-auto px-5 flex flex-col gap-10">
        <p className="text-3xl">TOTAL ORDERS COUNT: {totalOrders}</p>

        <button className="px-2 py-1 rounded bg-orange-300 hover:bg-orange-400 transition cursor-pointer max-w-[200px]">
          Reset
        </button>
      </div>
    </>
  )
}

export default App
