import PizzaView from './features/pizza/pizzaView'
import BurgerView from './features/burger/burgerView'
import { useDispatch, useSelector } from 'react-redux'
import { globalReset } from './features/global/globalSlice'
import InventoryCard from './components/InventoryCard'
import ProductView from './features/products/ProductView'
// import { resetBurger } from './features/burger/burgerSlice'
// import { resetPizza } from './features/pizza/pizzaSlice'

function App() {
  // const totalOrders = useSelector(state => {
  //   let totalOrder = state.burger.burgerCount + state.pizza.pizzaCount
  //   return totalOrder
  // })

  /** --- For Inventory data --- */
  const pizza = useSelector(state => state.pizza.pizzaCount)
  const burger = useSelector(state => state.burger.burgerCount)
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

        {/* Inventory Section */}
        <section className="max-w-3xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InventoryCard
            title="Pizza"
            count={pizza}
          />
          <InventoryCard
            title="Burger"
            count={burger}
          />
        </section>

        <main className="flex flex-col md:flex-row gap-10 max-w-3xl mx-auto my-10 md:mt-0">
          <PizzaView />
          <BurgerView />
        </main>

        <div className="px-5 flex flex-col gap-10 mt-3 md:mt-5 text-center">
          {/* <p className="text-3xl">TOTAL ORDERS: {totalOrders}</p> */}

          <button
            className="px-6 py-1.5 rounded bg-orange-300 hover:bg-orange-400 transition cursor-pointer max-w-[200px] md:mx-auto text-white"
            onClick={handleReset}>
            Reset Stock
          </button>
        </div>

        <ProductView />
      </div>
    </>
  )
}

export default App
