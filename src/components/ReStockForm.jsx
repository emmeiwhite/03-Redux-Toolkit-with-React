import { useState } from 'react'

const ReStockForm = ({ onRestock }) => {
  const [qty, setQty] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    if (qty > 0) {
      onRestock(qty)
      setQty(0)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex gap-2 items-center">
      <input
        type="number"
        value={qty}
        onChange={e => setQty(Number(e.target.value))}
        placeholder="Enter quantity"
        className="px-2 py-1 border rounded w-32"
      />
      <button
        type="submit"
        className="px-3 py-1 bg-green-400 hover:bg-green-500 rounded text-white transition">
        Restock
      </button>
    </form>
  )
}

export default ReStockForm
