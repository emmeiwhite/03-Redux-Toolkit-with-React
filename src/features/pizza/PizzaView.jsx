const PizzaView = () => {
  return (
    <div className="py-12">
      <h1 className="text-2xl">Pizza Component</h1>

      <p className="my-4">
        Pizza Count: <span>40</span>
      </p>
      <button className="px-2 py-1 rounded bg-orange-300 hover:bg-orange-400 transition cursor-pointer">
        Buy Pizza
      </button>
    </div>
  )
}
export default PizzaView
