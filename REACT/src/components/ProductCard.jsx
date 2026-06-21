import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'

function ProductCard({ product, size = 'normal' }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { showToast } = useToast()
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleFavorite = (e) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    e.preventDefault()
    addToCart(product, 1, product.specs || '')
    showToast('已添加到购物车', 'success')
  }

  const aspectRatioClass = product.aspectRatio === '3/4'
    ? 'aspect-[3/4]'
    : product.aspectRatio === '4/5'
    ? 'aspect-[4/5]'
    : product.aspectRatio === '4/3'
    ? 'aspect-[4/3]'
    : 'aspect-square'

  return (
    <div
      className="flex flex-col gap-stack-sm bg-white rounded-card overflow-hidden shadow-card border border-black/5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className={`relative w-full ${aspectRatioClass}`}>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-surface-container animate-pulse" />
        )}
        <img
          className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity`}
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
        />
        <button
          className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center text-primary active:scale-95 hover:scale-110 hover:text-primary-container transition-all"
          onClick={handleFavorite}
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={isFavorite ? { fontVariationSettings: "'FILL' 1", color: '#ff9f1c' } : {}}
          >
            favorite
          </span>
        </button>
        {product.tag && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-label-md font-bold shadow-sm ${
            product.tagColor === 'primary'
              ? 'bg-primary-container text-on-primary-container'
              : 'bg-secondary-container text-on-secondary-container'
          }`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-3 pt-0 flex flex-col gap-1">
        <h3 className="font-body-md text-body-md line-clamp-2 text-on-surface leading-tight font-medium">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          {product.tag && !product.tagColor && (
            <span className="px-1.5 py-0.5 bg-secondary-container/30 text-secondary text-[10px] rounded uppercase font-bold">
              {product.tag}
            </span>
          )}
        </div>
        <div className="flex justify-between items-end mt-1">
          <div className="flex flex-col">
            <span className="text-primary-container font-bold text-lg">¥{product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <span className="text-[10px] text-on-surface-variant line-through">¥{product.originalPrice.toFixed(2)}</span>
            )}
            <span className="text-[10px] text-on-surface-variant">已售 {product.sales >= 1000 ? `${(product.sales/1000).toFixed(1)}k` : product.sales}</span>
          </div>
          <button
            className="p-1 rounded hover:bg-surface-variant/50 transition-colors active:scale-95"
            onClick={handleAddToCart}
          >
            <span className="material-symbols-outlined text-on-surface-variant/40">more_horiz</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
