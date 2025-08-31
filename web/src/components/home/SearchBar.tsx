import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('')
  return (
    <div className="w-full flex items-center justify-center mb-8">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full py-3 pl-12 pr-4 rounded-full bg-white/80 shadow-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          placeholder="Tìm kiếm sản phẩm hot, xu hướng..."
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 h-6 w-6" />
      </div>
    </div>
  )
}

export default SearchBar
