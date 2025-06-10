import { useDispatch, useSelector } from 'react-redux'
import { orderBurger } from './burgerSlice'

const BurgerView = () => {
  const burgerCount = useSelector(state => {
    console.log(state)
    return state.burger.burgerCount
  })

  const dispatch = useDispatch()
  return (
    <div className="py-12">
      <h1 className="text-2xl">Burger Component</h1>

      <p className="my-4">
        Burger Count: <span className="text-xl font-bold">{burgerCount}</span>
      </p>
      <button
        className="px-2 py-1 rounded bg-orange-300 hover:bg-orange-400 transition cursor-pointer"
        onClick={() => {
          dispatch(orderBurger())
        }}>
        Order Burger
      </button>
    </div>
  )
}
export default BurgerView
