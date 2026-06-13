function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-400">Dev-Tracker</h1>
      <div className="flex gap-6">
        <a href="#" className="hover:text-green-600">Github</a>
        <a href="#" className="hover:text-green-600">Leetcode</a>
        <a href="#" className="hover:text-green-600">Compare</a>
      </div>
    </nav>
  )
}

export default Navbar;