import { useDispatch, useSelector } from 'react-redux'
import { orderBurger, reStockBurger } from './burgerSlice'
import ReStockForm from '../../components/ReStockForm'

const BurgerView = () => {
  const burgerCount = useSelector(state => {
    console.log(state)
    return state.burger.burgerCount
  })

  const dispatch = useDispatch()

  const handleRestock = qty => {
    console.log(qty)
    // Now we'll reStock our burgers as per the quantity
    dispatch(reStockBurger(qty))
  }

  return (
    <div className="md:py-12">
      {/* <h1 className="text-2xl font-semibold">Burgers</h1>

      <p className="my-4">
        Burger Count: <span className="text-xl font-bold">{burgerCount}</span>
      </p> */}
      <div className="flex gap-4 items-center flex-wrap">
        <button
          disabled={burgerCount === 0}
          className={`px-3 py-1 rounded transition  ${
            burgerCount === 0
              ? 'bg-gray-300 cursor-not-allowed text-white'
              : ' bg-orange-300 hover:bg-orange-400 cursor-pointer'
          }`}
          onClick={() => dispatch(orderBurger())}>
          Order Burger
        </button>

        <ReStockForm onRestock={handleRestock} />
      </div>
    </div>
  )
}
export default BurgerView
