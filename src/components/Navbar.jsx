function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center border-b border-gray-600">
      <h1 className="text-xl font-bold hover:text-green-600 transition duration-300">Dev-Tracker</h1>
      <div className="flex gap-6">
        <a href="#" className="border border-gray-700 px-4 py-2 rounded-lg hover:text-blue-400 transition duration-300">Github</a>
        <a href="#" className="border border-gray-700 px-4 py-2 rounded-lg hover:text-blue-400 transition duration-300">Leetcode</a>
        <a href="#" className="border border-gray-700 px-4 py-2 rounded-lg hover:text-blue-400 transition duration-300">Compare</a>
      </div>
    </nav>
  )
}

export default Navbar;