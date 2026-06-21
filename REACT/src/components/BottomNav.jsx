import { NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navItems = [
  { path: '/', icon: 'home', label: '首页', activeIcon: 'home' },
  { path: '/category', icon: 'grid_view', label: '分类', activeIcon: 'grid_view' },
  { path: '/cart', icon: 'shopping_cart', label: '购物车', activeIcon: 'shopping_cart', showBadge: true },
  { path: '/messages', icon: 'chat', label: '消息', activeIcon: 'chat' },
  { path: '/profile', icon: 'person', label: '我的', activeIcon: 'person' }
]

function BottomNav() {
  const location = useLocation()
  const { getTotalCount } = useCart()
  const cartCount = getTotalCount()

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center py-2 px-2 bg-surface/60 backdrop-blur-xl shadow-glass pb-6">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all duration-150 ${
              isActive
                ? 'bg-primary-container text-on-primary-container scale-90'
                : 'text-on-surface-variant hover:opacity-80'
            }`}
          >
            <span
              className={`material-symbols-outlined text-2xl ${isActive ? '' : ''}`}
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {isActive ? item.activeIcon : item.icon}
            </span>
            <span className="font-label-md text-[10px] mt-0.5">{item.label}</span>
            {item.showBadge && cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default BottomNav
