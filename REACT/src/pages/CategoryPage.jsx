import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { CategoryIcon, categories } from '../components/CategoryData'
import { PRODUCTS } from '../context/CartContext'

const tabs = ['热门', '上新', '优惠']

function CategoryPage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('life')
  const [activeTab, setActiveTab] = useState('热门')
  const [showPriceCompare, setShowPriceCompare] = useState(false)

  const filteredProducts = PRODUCTS.filter(p => p.store === '生活家居').slice(0, 6)

  return (
    <div className="min-h-screen bg-background">
      <Header title="分类" />

      <main className="flex h-[calc(100vh-140px)] overflow-hidden">
        {/* Left: Category Tree */}
        <aside className="w-24 md:w-32 bg-surface-container-lowest overflow-y-auto border-r border-outline-variant/20">
          <nav className="flex flex-col py-stack-md">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`relative px-2 py-4 text-center transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-container text-on-primary-container active-triangle font-bold'
                    : 'text-on-surface-variant hover:bg-surface-variant/30'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="font-label-md text-label-md">{category.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Right: Product Grid & Tabs */}
        <section className="flex-1 overflow-y-auto bg-surface-bright px-4 pb-20">
          {/* Tabs */}
          <div className="sticky top-0 bg-surface-bright/90 backdrop-blur-md z-10 py-stack-md mb-stack-sm flex gap-stack-md">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-1.5 rounded-full font-label-md text-label-md font-bold active:scale-95 transition-all ${
                  activeTab === tab
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-variant/50'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Masonry Grid */}
          <div className="masonry-grid pb-24">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      {/* Price Compare Button */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-3">
        <div
          className={`opacity-0 translate-y-4 transition-all duration-300 bg-surface-container-highest/95 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-outline-variant/30 w-64 ${
            showPriceCompare ? 'opacity-100 translate-y-0' : 'pointer-events-none'
          }`}
        >
          <h4 className="font-title-lg text-on-surface mb-2">价格对比</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-body-md">
              <span className="text-on-surface-variant">当前商品</span>
              <span className="text-primary font-bold">¥128.00</span>
            </div>
            <div className="flex justify-between items-center text-body-md">
              <span className="text-on-surface-variant">全网最低</span>
              <span className="text-secondary font-bold">¥119.00</span>
            </div>
            <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
              <div className="bg-primary-container h-full w-3/4"></div>
            </div>
            <p className="text-[10px] text-on-surface-variant">为您节省了 7% 的开支</p>
          </div>
        </div>
        <button
          className="flex items-center gap-2 bg-primary-container text-on-primary-container px-5 py-3 rounded-full shadow-lg active:scale-90 transition-transform duration-150 hover:shadow-primary-container/50"
          onClick={() => setShowPriceCompare(!showPriceCompare)}
        >
          <span className="material-symbols-outlined">compare_arrows</span>
          <span className="font-label-md font-bold">价格对比</span>
        </button>
      </div>
    </div>
  )
}

export default CategoryPage
