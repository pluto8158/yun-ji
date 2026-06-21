import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../context/CartContext'

const filters = ['热门', '价格从低到高', '最新', '销量', '有机材质']

function SearchPage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('Handmade Ceramics')
  const [activeFilter, setActiveFilter] = useState('热门')
  const [showFilters, setShowFilters] = useState(false)

  const searchResults = PRODUCTS.slice(0, 6)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface/60 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm">
        <div className="flex justify-between items-center w-full px-margin-mobile py-stack-sm max-w-7xl mx-auto">
          <div className="flex items-center gap-4 flex-1">
            <span className="font-headline-md text-headline-md font-bold text-primary">Yunji</span>
            <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full flex-1 max-w-md group focus-within:ring-2 focus-within:ring-primary-container transition-all">
              <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 w-full text-body-md font-body-md"
                placeholder="Search curated goods..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-primary">camera_alt</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-primary">mic</span>
            </button>
          </div>
        </div>
        {/* Mobile Search Bar */}
        <div className="md:hidden px-margin-mobile pb-stack-sm">
          <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-full">
            <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 w-full text-body-md font-body-md"
              placeholder="Search..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-margin-mobile pt-stack-lg pb-32">
        {/* Search Info & Filters */}
        <section className="mb-stack-lg">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-headline-md text-headline-md text-on-background mb-1">
                搜索 "Handmade Ceramics"
              </h1>
              <p className="font-body-md text-on-surface-variant">找到 124 件来自独立工匠的独特作品</p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-transform ${
                  showFilters
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-secondary-container text-on-secondary-container'
                }`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
                筛选
              </button>
              <div className="h-6 w-[1px] bg-outline-variant mx-1"></div>
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-opacity ${
                    activeFilter === filter
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-secondary-container text-on-secondary-container hover:opacity-80'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <div className="masonry-grid">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 bg-primary-container text-on-primary-container p-4 rounded-full shadow-lg z-40 active:scale-95 transition-transform hover:shadow-xl group">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-label-md">
            匠人故事
          </span>
        </div>
      </button>
    </div>
  )
}

export default SearchPage
