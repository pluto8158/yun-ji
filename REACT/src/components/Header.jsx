import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Header({ title = 'Yunji', showBack = false, showSearch = true, showActions = true }) {
  const { getTotalCount } = useCart()
  const cartCount = getTotalCount()

  return (
    <header className="sticky top-0 z-50 bg-surface/60 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center w-full px-margin-mobile py-stack-sm max-w-7xl mx-auto">
        <div className="flex items-center gap-4 flex-1">
          <h1 className="font-headline-md text-headline-md font-bold text-primary">
            {title}
          </h1>
          {showSearch && (
            <div className="flex-1 max-w-md relative hidden md:block">
              <Link to="/search" className="flex">
                <div className="flex items-center bg-surface-container-lowest rounded-full px-4 py-2 gap-2 shadow-sm border border-black/5 w-full">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
                  <span className="text-body-md text-on-surface-variant/50">搜索美好生活...</span>
                </div>
              </Link>
            </div>
          )}
        </div>
        {showActions && (
          <div className="flex items-center gap-3 ml-4">
            <Link to="/search" className="p-2 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-primary">search</span>
            </Link>
            <Link to="/cart" className="p-2 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 duration-200 relative">
              <span className="material-symbols-outlined text-primary">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
