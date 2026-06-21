function Navbar({ theme, setTheme, totalStars }) {
  return (
    <nav className="bg-[#0a1f0f] border-b border-[#1e3b2a] px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-[#22c55e] text-2xl font-bold tracking-wide">
        Dev-Tracker ⭐ {totalStars}
      </h1>

      <div className="flex gap-3 items-center">
        <button className="bg-[#1e3b2a] border border-[#22c55e] text-[#22c55e] px-4 py-2 rounded-lg hover:bg-[#22c55e] hover:text-black transition-all">
          GitHub
        </button>
        <button className="bg-[#1e3b2a] border border-[#22c55e] text-[#22c55e] px-4 py-2 rounded-lg hover:bg-[#22c55e] hover:text-black transition-all">
          LeetCode
        </button>
        <button className="bg-[#1e3b2a] border border-[#22c55e] text-[#22c55e] px-4 py-2 rounded-lg hover:bg-[#22c55e] hover:text-black transition-all">
          Compare
        </button>
        <button className="bg-[#1e3b2a] border border-[#22c55e] text-[#22c55e] px-4 py-2 rounded-lg hover:bg-[#22c55e] hover:text-black transition-all">
          About
        </button>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="bg-[#22c55e] text-black px-4 py-2 rounded-lg hover:bg-[#16a34a] transition-all font-bold"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

    </nav>
  )
}

export default Navbar;