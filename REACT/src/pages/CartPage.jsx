import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useCart } from '../context/CartContext'
import { PRODUCTS } from '../context/CartContext'

function CartPage() {
  const navigate = useNavigate()
  const {
    cartItems,
    updateQuantity,
    toggleSelect,
    toggleSelectAll,
    getTotalPrice,
    getTotalDiscount,
    getSelectedCount,
    getTotalCount,
    removeFromCart,
    isManageMode,
    setIsManageMode
  } = useCart()

  const [swipedItem, setSwipedItem] = useState(null)

  const handleSwipeStart = (e, productId, specs) => {
    setSwipedItem({ productId, specs })
  }

  const handleSwipeEnd = () => {
    setSwipedItem(null)
  }

  const handleDelete = (productId, specs) => {
    removeFromCart(productId, specs)
    setSwipedItem(null)
  }

  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected)
  const totalPrice = getTotalPrice()
  const totalDiscount = getTotalDiscount()
  const selectedCount = getSelectedCount()

  // Group items by store
  const groupedItems = cartItems.reduce((acc, item) => {
    const store = item.product.store || '云集自营'
    if (!acc[store]) {
      acc[store] = []
    }
    acc[store].push(item)
    return acc
  }, {})

  const storeIcons = {
    '云集自营': 'storefront',
    '匠心工房': 'handyman'
  }

  return (
    <div className="min-h-screen bg-background">
      <Header title="购物车" />

      {cartItems.length === 0 ? (
        <main className="flex flex-col items-center justify-center py-20 px-margin-mobile">
          <div className="w-48 h-48 mb-6 relative">
            <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-3xl"></div>
            <img
              className="w-full h-full object-contain relative z-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK-IQRGrMMcJRLPD_-aevAWb6oEYYbiLO4QUF2eJv5rxaJLxbxvKLIn1OfLw_R2_MIVhcRa4Co2NK2LW8Bmrud9piBnt_SxxWCRt7WiGMskDmgrEdbii5jGDh9-zkyqW9ErSGIiyej6fbu4r7wgwGOizlG0WlXmNVVg9ffeqFAhfYqHEhgrBWsSXe-3wclv0Os8D_dUJXh9pwGFlyyc61WlZdDqMFg8qsxyjBE6CQLpI4CGAzMVS_uHsoA-JDprnPlQr7lrMIW7mip"
              alt="空购物车"
            />
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">购物车还是空的哦</h3>
          <p className="text-on-surface-variant mb-stack-lg max-w-xs mx-auto text-center">
            去发现一些心仪的物件吧，让生活更有仪式感。
          </p>
          <button
            className="bg-primary-container text-on-primary-container px-8 py-3 rounded-full font-title-lg shadow-lg hover:scale-95 transition-transform active:scale-90"
            onClick={() => navigate('/')}
          >
            去逛逛
          </button>
        </main>
      ) : (
        <main className="max-w-3xl mx-auto mt-stack-md px-margin-mobile space-y-stack-lg pb-40">
          {Object.entries(groupedItems).map(([store, items]) => (
            <section key={store} className="space-y-stack-sm">
              <div className="flex items-center gap-3 py-2">
                <input
                  checked={items.every(item => item.selected)}
                  onChange={(e) => {
                    items.forEach(item => {
                      if (item.selected !== e.target.checked) {
                        toggleSelect(item.product.id, item.specs)
                      }
                    })
                  }}
                  className="w-5 h-5 rounded-full border-outline text-primary-container focus:ring-primary-container transition-transform active:scale-110"
                  type="checkbox"
                />
                <span className="material-symbols-outlined text-primary">
                  {storeIcons[store] || 'storefront'}
                </span>
                <h2 className="font-title-lg text-title-lg text-on-surface">{store}</h2>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>
              </div>

              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.specs}`}
                  className="relative overflow-hidden group"
                >
                  {isManageMode && (
                    <div
                      className="absolute inset-y-0 right-0 w-20 bg-error flex items-center justify-center rounded-xl cursor-pointer"
                      onClick={() => handleDelete(item.product.id, item.specs)}
                    >
                      <span className="material-symbols-outlined text-on-error">delete</span>
                    </div>
                  )}
                  <div
                    className={`cart-item-swipe relative flex items-center gap-3 bg-surface-container-lowest p-stack-md rounded-xl shadow-sm border border-black/[0.05] duration-150 ${
                      swipedItem?.productId === item.product.id ? 'translate-x-[-80px]' : 'translate-x-0'
                    }`}
                    style={{ transform: swipedItem?.productId === item.product.id ? 'translateX(-80px)' : 'translateX(0)' }}
                  >
                    <input
                      checked={item.selected}
                      onChange={() => toggleSelect(item.product.id, item.specs)}
                      className="w-5 h-5 rounded-full border-outline text-primary-container focus:ring-primary-container transition-transform active:scale-110"
                      type="checkbox"
                    />
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        src={item.product.image}
                        alt={item.product.name}
                      />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className="font-title-lg text-body-lg text-on-surface truncate">
                        {item.product.name}
                      </h3>
                      {item.specs && (
                        <p className="text-label-md text-on-surface-variant bg-surface-container-low inline-block px-2 py-0.5 rounded">
                          规格: {item.specs}
                        </p>
                      )}
                      <div className="flex justify-between items-end pt-2">
                        <div className="flex flex-col">
                          <span className="text-primary font-bold text-lg">¥{item.product.price.toFixed(2)}</span>
                          {item.product.discount && (
                            <span className="text-error text-xs font-label-md">{item.product.discount}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 bg-surface-container rounded-full p-1 border border-black/[0.02]">
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors active:scale-90"
                            onClick={() => updateQuantity(item.product.id, item.specs, item.quantity - 1)}
                          >
                            <span className="material-symbols-outlined text-sm">remove</span>
                          </button>
                          <span className="font-bold text-body-md w-4 text-center">{item.quantity}</span>
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:opacity-80 transition-opacity hover:scale-105"
                            onClick={() => updateQuantity(item.product.id, item.specs, item.quantity + 1)}
                          >
                            <span className="material-symbols-outlined text-sm">add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </main>
      )}

      {/* Checkout Bottom Sheet */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-[88px] left-0 w-full px-margin-mobile pb-base z-40 max-w-3xl mx-auto right-0">
          <div className="glass-bottom rounded-2xl shadow-glass p-stack-md border border-black/[0.05]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_shipping
                </span>
                <span className="text-label-md text-on-surface-variant">自营商品已包邮</span>
              </div>
              <div className="text-right">
                {totalDiscount > 0 && (
                  <span className="text-label-md text-on-surface-variant block">已优惠 ¥{totalDiscount.toFixed(2)}</span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <input
                    checked={allSelected}
                    onChange={(e) => toggleSelectAll(e.target.checked)}
                    className="w-5 h-5 rounded-full border-outline text-primary-container focus:ring-primary-container transition-transform active:scale-110"
                    type="checkbox"
                  />
                  <span className="text-body-md font-medium">全选</span>
                </div>
                <div>
                  <span className="text-label-md text-on-surface-variant">合计:</span>
                  <span className="text-primary font-bold text-2xl ml-1">¥{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button
                className="bg-primary-container text-on-primary-container font-title-lg text-title-lg px-10 py-3.5 rounded-full shadow-lg hover:scale-95 active:scale-90 transition-transform hover:shadow-primary-container/40"
                onClick={() => navigate('/checkout')}
                disabled={selectedCount === 0}
              >
                去结算 ({selectedCount})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage Button */}
      {cartItems.length > 0 && (
        <button
          className="fixed top-20 right-4 font-label-md text-label-md text-primary font-bold hover:bg-surface-variant/50 transition-colors px-3 py-1.5 rounded-full z-50"
          onClick={() => setIsManageMode(!isManageMode)}
        >
          {isManageMode ? '完成' : '管理'}
        </button>
      )}
    </div>
  )
}

export default CartPage
