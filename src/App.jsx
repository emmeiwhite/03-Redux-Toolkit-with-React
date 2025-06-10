import PizzaView from './features/pizza/pizzaView'
import BurgerView from './features/burger/burgerView'

function App() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-5 flex gap-10">
        <PizzaView />
        <BurgerView />
      </main>
    </>
  )
}

export default App
