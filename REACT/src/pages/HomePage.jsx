import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import { PRODUCTS } from '../context/CartContext'
import { CategoryIcon, categories } from '../components/CategoryData'

const heroSlides = [
  {
    id: 1,
    title: '慢生活咖啡志',
    subtitle: '精选全球独立烘焙豆',
    tag: '春日茶歇',
    tagColor: 'primary-container',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4IPrSee9_0LFFkLWSmXno9o2EURkIw77sU30gBg-wQ-56y0wBjobKVDrjl3j0tMDHjNqmmO9OWeMmR3G-uatUidSIQwhJ-3BiC6rzJZcG1HDZVH5LoAYbYTJD3U7sF4XEUQxRmUELBc6VmZAhwuTFh_YaDVj9GHWErE18rURE6j6LtH6DtV4Jrhz5s34bhvPLsSE-mLFGS4ImaPAGVvTQ-kOkVitzcZGDS0ubdgpxrMCk82B6KF8H-Tnbgqr90CnXYLoHeXF-mqCx'
  },
  {
    id: 2,
    title: '居家绿植灵感',
    subtitle: '让家呼吸的自然角落',
    tag: '周末筑巢',
    tagColor: 'secondary-container',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhPDQRujvbtK2lu5jLXb93dIsGFSyH1R0jAm3d-Vwv6WfMuVhuN5HUb8aOGxIp8rXFvX0MxyI4CIkMZmLiZLGVs1FD1UpSeJ6TLtMjfvQMIjzk5ly1RWvqLWcsBf15G_2LzY7VRWaE-f7qz4Pf8f5Pe1i0Q6_Ft6RnVTEH1RkmyWrJXgpXeyuuYlvmklwc0J7KrfeDtR4ONrDpLINm5megwEJwGpTsLGAdHAC7AEQJyJt4sh38_d3kmm2OcuhX4mMg0zp2iPq8wFYX'
  }
]

function HomePage() {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideClick = () => {
    navigate('/search')
  }

  const handleCategoryClick = (categoryId) => {
    navigate('/category')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Weather Bar */}
      <div className="w-full px-margin-mobile pt-stack-sm pb-2">
        <div
          className="w-full rounded-card p-4 bg-gradient-to-r from-surface-container-low via-surface-variant to-secondary-container flex items-center justify-between shadow-sm cursor-pointer active:scale-95 transition-transform"
          onClick={() => navigate('/search')}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">water_drop</span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface-variant">今天有雨</span>
              <span className="font-body-md text-body-md font-medium text-on-surface">适合窝在沙发里逛逛</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </div>
      </div>

      <main className="pb-32 overflow-x-hidden">
        {/* Hero Section */}
        <section className="mt-stack-md px-margin-mobile">
          <div className="flex items-end justify-between mb-stack-sm">
            <h2 className="font-headline-md text-headline-md text-on-background">主题集市</h2>
            <button
              className="font-label-md text-label-md text-primary font-bold active:scale-95 transition-transform"
              onClick={() => navigate('/search')}
            >
              查看更多
            </button>
          </div>
          <div className="hero-carousel hide-scrollbar rounded-card relative">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className="hero-card group relative h-full w-full mb-4 cursor-pointer overflow-hidden rounded-card"
                onClick={handleSlideClick}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-card z-10 transition-opacity group-hover:opacity-80"></div>
                <div
                  className="w-full h-full bg-cover bg-center rounded-card transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                ></div>
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className={`px-3 py-1 ${
                    slide.tagColor === 'primary-container'
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-secondary-container text-on-secondary-container'
                  } rounded-full text-label-md font-bold shadow-sm`}>
                    {slide.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                  <div className="text-white">
                    <h3 className="font-headline-md text-headline-md mb-1">{slide.title}</h3>
                    <p className="font-body-md opacity-90">{slide.subtitle}</p>
                  </div>
                  <button
                    className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-md font-bold shadow-lg active:scale-95 hover:bg-primary-container/90 hover:shadow-xl transition-all"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSlideClick()
                    }}
                  >
                    去逛逛
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Slide indicators */}
          <div className="flex justify-center gap-1.5 mt-2">
            {heroSlides.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-1 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary-container' : 'bg-surface-variant'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mt-stack-lg overflow-x-hidden">
          <div className="flex overflow-x-auto hide-scrollbar gap-6 px-margin-mobile pb-2">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform duration-200"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="w-16 h-16 rounded-full glass border border-white/40 flex items-center justify-center shadow-sm group-hover:border-primary/40 transition-colors">
                  <CategoryIcon category={category} />
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mt-stack-lg px-margin-mobile">
          <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">今日精选</h2>
          <div className="masonry-grid">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
