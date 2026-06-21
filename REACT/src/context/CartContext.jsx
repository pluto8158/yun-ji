import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

// Sample product data
export const PRODUCTS = [
  {
    id: 1,
    name: '手工粗陶磨砂马克杯 极简北欧风',
    price: 128.00,
    originalPrice: 128.00,
    sales: 421,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp75_XBmL7B_-wtTb-WCiwol47fKXyJh5xpwWwVJAM2CBTWa6tft_ci0yEVp6RxF9Fc_JPQfV6kh8vFlq_o3Nosnl6hl2gA3QPGt6fO8h09pDca3OdVP761cl2Jtx04p3JrjiHY0pK68iJZafjsEQpplhf1M25ahy45o38USNcIi-lLQI-_pNaIwIEF3OxcOFoSanoGZeM-kqfCX6dCaeZotxblV_LUu0AM146XZZ7beUxUNbk9mFFu8eCZ-jvj0jUZwpimBAI2V4J',
    tag: 'Handmade',
    tagColor: 'secondary',
    store: '云集自营',
    storeIcon: 'storefront',
    aspectRatio: '3/4'
  },
  {
    id: 2,
    name: '原木质感 蓝牙便携小音箱',
    price: 399.00,
    originalPrice: 399.00,
    sales: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx8gGaDO7LXUmlH-n3najBXyZ8mygg5vXlvagtzTo7BUM6aOV7eEtbk5VRwyfY-6cIrhf-GhIIsstjh2dvEaOPYQz9ALwsaPvqBEyy4wT6iNjUlSbS4C352aElbv_kxdyFqdQ3G91QtABsQHXNAPBv5wivBT2-gNqJFZvefEZZ1I05xHHk_Mf16U6ZoILv-FFakx1Xka_Le5Bmlg7-ON_KDuSTPUEbiotTBUsxHVExDyrwab-_DxcHiCznLqET0lVceq3a5r60pE4d',
    tag: 'New Arrival',
    tagColor: 'primary',
    store: '云集自营',
    storeIcon: 'storefront',
    aspectRatio: 'square'
  },
  {
    id: 3,
    name: '春日限定：茉莉白茶礼盒',
    price: 218.00,
    originalPrice: 218.00,
    sales: 1200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYDN3B5UNsgcYzXEhYW7JK2Py6LuvHd1XXbop75WFn29wZD3t1KN3yMvcVxgtS-LJhMz0ljTsAikEXXDFryGUbGRcgvM21qgR_ZdVm1arr4RLmffKmcCLwajqhaP86ZqhjL2OcFW05JGZGpGrR25dEDMPaiXlox4toYJECOQqIq2b9U18ayh7XL5Tczf3XzjdyUAnqvBBNAak2THjhH17qtC25HJ9CFNvP5I6bTg6wD3UR94aV3zuzwVA4LjTPURh1MgBXgrhwyvrY',
    store: '云集自营',
    storeIcon: 'storefront',
    aspectRatio: 'square'
  },
  {
    id: 4,
    name: '高级感亚麻廓形西装外套',
    price: 649.00,
    originalPrice: 649.00,
    sales: 256,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKlHCU_jz7FrkhU-4mriFJdTC8VsltKQVXiAfK26wayuZKT3Wa3YTRrFp2zmxkTXoLqXPeBmiygg_lk8HhlGeDPT_BopYyzuneLjbedxqyPwg3KLxfh7X_-gei7ju-Z1Pv--88NVEgoPgFGAll_sXluBqejjU1JL1PQvaK1Bv_gUnQX3EwjMygHBXaLY_56GY6up1-ZIrh2xoXwoSlL4ezqU1PZdMr-4955ePuIji41MBkJb105LFbyYmBSm4fKl6zw3NBgjzSE_bZ',
    store: '云集自营',
    storeIcon: 'storefront',
    aspectRatio: '4/5'
  },
  {
    id: 5,
    name: '匠心系列 · 手作青瓷茶盏',
    price: 198.00,
    originalPrice: 198.00,
    sales: 156,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9xJLlkuYiAUOxrdC9rWKCzDQzuaVhW-FnYmZWccfGvtqdhbFRavE-Ny6_xfDAsGnVzn28MMxe9MgB582W6lg2w19n2lFTu42yASRum3rJd0NhVgtHHR0dyKtb7bBoESNzVZ9l7IIG4ecnJ53ubTB2ohWckFPeYgAzrH39_EFskIYOv1IWu9JGydRl8sUyAgVUaGmHczSVJn11ICtJr3XlLvVZkEJk3OHVJx2aFybMqAGdI3nL9MihOEhNbT524G0zm5hETqSiZxLP',
    specs: '苍岭绿 / 150ml',
    store: '云集自营',
    storeIcon: 'storefront',
    aspectRatio: 'square'
  },
  {
    id: 6,
    name: '原色亚麻 · 呼吸感抱枕套',
    price: 89.00,
    originalPrice: 99.00,
    sales: 312,
    discount: '限时直降¥10',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOfJ1l_ojP4PL1vP1ISCOsKw58c5V9SSk-_Ahupaz5XyKd-QsrViLRE3l3lB0xmV6Fnfupi14OlCjeCG7mQLTrLo7-a96-K-EI5dOAm0v9I_LxbTKCWEyDQ91EdWbhWl_cMGgjpr4oD8HHgFJmEKNOb4mEZjxprwS65hXhFVmKNxEVXU3-RXJZLQNYY44OBX0rIzqaAokTrjJitjdQk1aHB8E-_PD-PBLfFSsqaFO1FfG1gSxtDk85isPuv8DZPFhedtiA_Q-yzGEe',
    specs: '象牙白 / 45x45cm',
    store: '云集自营',
    storeIcon: 'storefront',
    aspectRatio: 'square'
  },
  {
    id: 7,
    name: '苏工折扇 · 檀香镂空扇',
    price: 560.00,
    originalPrice: 560.00,
    sales: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsOOeOO7B09RGFBjGdqiNaak6qeJW2Z9xZbhK-TIbCFN8xZNHnK5PhpG2HI_NOCC8R4DzGHC-VLkqMU-B7T0ciZJwYFPZ8ua1Gmci9UTTDXzVyXiHM-DtyPcLyUuvZc0mFA0EhsE2QAYM4osirMIS6qtu7Ty0svQU3PPyYstKtaEQyJ906xxg629Bv2EIpnTTVW6Ajj6zJ2wcV6vyLEEgBlvBhH8siBzrMXvCnZhhPl0lQq0T56loJaE0gU766lGdrfW97lGseVw2-',
    specs: '经典苏绣 / 9寸',
    store: '匠心工房',
    storeIcon: 'handyman',
    aspectRatio: 'square'
  },
  {
    id: 8,
    name: '北欧风简约陶瓶',
    price: 128.00,
    originalPrice: 128.00,
    sales: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGCt1T3i6eL9VsfzNT6n4Tbi_d5E1O6nf13lWPYC221ch04i7sycsy4zZx6ixcPg3Z7JJ2ngPKA4le4BkVo4F0VX7XYApkYVZiBgWM09KKCy7w8eFsChD-R52Wog1kYjYAdpqOSqyEvLj8A669rHl_EUxqOcCLlJ90H8wmKncBnMPgd06wRzhCzy6i4gdDXIgyqszAxW5N8Y5j-wYY6Zl9jXD6Is2bUPTBApSYMGh4VF_WXpruHMaTIK4wkXMvutDbt2LoZhexczP9',
    tag: '手工定制',
    tagColor: 'secondary',
    store: '生活家居',
    storeIcon: 'chair',
    aspectRatio: '4/5'
  },
  {
    id: 9,
    name: '云柔系列床品四件套',
    price: 499.00,
    originalPrice: 499.00,
    sales: 234,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDHAynOYX5ljNtZ1CBvrDph4ueqZfOpuRn23bjabTzrEI4wY68V4CztMyWm7SsH7LqMzXul-PM3r214EQ8mwlLsvtBczRFaEytX2XZIxUWbk0Kg65x7xv2UeKxWptDFKSTY6gnT-Qh6SMN7KyhRuBhjMNHrbAgDVlbaupp-x7Za9seVssqe1I9CEw-OfLoZ-skf5DwVeDsRefChxS8Z529grNVysCzmv43xHcUWyPTzWrdqNyXvPr9swl58-nHln-EZXPSgOqw17oK',
    tag: '100%有机棉',
    tagColor: 'secondary',
    store: '生活家居',
    storeIcon: 'chair',
    aspectRatio: '4/3'
  },
  {
    id: 10,
    name: '氛围感护眼台灯',
    price: 256.00,
    originalPrice: 256.00,
    sales: 178,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCTLmkZ0XSNKG5OEpTl70d9B-ZfkAs46ogfiGVBsJ9FGkmmtxigzlbZMiSsZOFuEhwxXSG2Q_aJKSc4ImR6kqphvDl3LQPbN_KPB8xA4WcZ-_X5CRElHehXZK_9uvSxc1QyQDoMTCzYs0VKD989fpzFumYwuUgce17Qew8m6--K8VGVZJRqLINmEnD-rjeaJntMh9TAziHlUoNpsAik33dnGJIuSkJOlMXGmJ7gakckxwqX2k-Uad8TX8sPUnAsOjXkjsDYxXNkEEt',
    tag: '智能调光',
    tagColor: 'secondary',
    store: '数码电子',
    storeIcon: 'devices',
    aspectRatio: 'square'
  }
]

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isManageMode, setIsManageMode] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('yunji_cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('yunji_cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, quantity = 1, specs = '') => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.specs === specs
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex].quantity += quantity
        return updated
      }
      return [...prev, { product, quantity, specs, selected: true }]
    })
  }

  const removeFromCart = (productId, specs = '') => {
    setCartItems(prev => prev.filter(
      item => !(item.product.id === productId && item.specs === specs)
    ))
  }

  const updateQuantity = (productId, specs, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, specs)
      return
    }
    setCartItems(prev => prev.map(item => {
      if (item.product.id === productId && item.specs === specs) {
        return { ...item, quantity }
      }
      return item
    }))
  }

  const toggleSelect = (productId, specs) => {
    setCartItems(prev => prev.map(item => {
      if (item.product.id === productId && item.specs === specs) {
        return { ...item, selected: !item.selected }
      }
      return item
    }))
  }

  const toggleSelectAll = (selected) => {
    setCartItems(prev => prev.map(item => ({ ...item, selected })))
  }

  const getSelectedItems = () => cartItems.filter(item => item.selected)

  const getTotalPrice = () => {
    return getSelectedItems().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    )
  }

  const getTotalDiscount = () => {
    return getSelectedItems().reduce((sum, item) => {
      const diff = item.product.originalPrice - item.product.price
      return sum + (diff > 0 ? diff * item.quantity : 0)
    }, 0)
  }

  const getSelectedCount = () => getSelectedItems().length

  const getTotalCount = () => cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleSelect,
      toggleSelectAll,
      getSelectedItems,
      getTotalPrice,
      getTotalDiscount,
      getSelectedCount,
      getTotalCount,
      clearCart,
      isManageMode,
      setIsManageMode
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
