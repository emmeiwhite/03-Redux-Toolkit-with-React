const InventoryCard = ({ title, count }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-gray-600 shadow-md w-64">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-lg">
        In Stock: <span className="font-bold">{count}</span>
      </p>
    </div>
  )
}

export default InventoryCard
