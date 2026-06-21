import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { PRODUCTS } from '../context/CartContext'

const reviews = [
  {
    id: 1,
    name: '林语茗',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDegdhxr3QRaPKhCjZUGuClJFvslPWDQD61qL-GCYUnZX0I9Dck7Z5s9kNkeyf2WyFu3KrTCWxZ13uB7XRcj2k8a43GHv25_J3ekE6pnBYZhjIgEE3jMlrJ8z7_W_M_Y0raF0LlMacFZzloZrPKytXd5Jaq_mu7wCVMqVfG0Vy5RmHkdhGjUoQbwkMAeUCUqKfuAwwWie8FjMkHc3GiNejLTuMNdEnpgoDdnaVyHA3N4RGnc04y60lxiMbxS9F0r3FdrtMxDZ0EGlwj',
    rating: 5,
    content: '"质感温润，放在茶室里非常有禅意，包装也极其用心。"'
  },
  {
    id: 2,
    name: '墨客张',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMj1tyC3HyLpYYdd--y2Y7UW2fnhcHTKBEFQm3CkoTIKLg3sqLDgngJGzb_P1zxrYcoxi20KEyUI-G0DKhmQn5GHWAB_Qq6L2EcsBnZ25wLPhwOLHonGsr1BxRImr9diuc1_juegkcSZUc7hTwU1vVgQhh85a6xmsL3EQJ86U7B5ZqnFFbjTGMMQX2j5zhZRoNmrz8PaMuUFsGTjEzNw9WAWQ3vxqZpmIbEfw4lOYknYTk6ulbIa7Tr5IlSwvuRccWVqdmFgHfHSUk',
    rating: 5,
    content: '"手感扎实，釉面细腻，是难得的现代中式好物。"'
  },
  {
    id: 3,
    name: '清浅夏',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3dx90zPkW6xg3wfwR8veqO60x2LmEPdohjYtNndBe5RsO9Jex_MidxTEPzmsekjkKmgPWMhcHUlmnQY5lpafNf-4GESeNtBftOGpu1Y1vf_ezvCX5_wSLGYMeKVbelTIESndi3CoC8oj6wlsE-8KRRkaIX2cdPc-WbmYSCyPrl7HTEBuqNTxl1NAdO4faYDx_35inISbf5MIwGxBpcbrmbqw7EQwCuCwFnc2LQj0t5UUS8t53ZSkgv0eKoLkCETk1p1T3WmGwXTRn',
    rating: 5,
    content: '"送人的礼物，朋友很喜欢。云集的选品从未失望过。"'
  }
]

const recommendations = PRODUCTS.slice(0, 3).map((p, i) => ({
  ...p,
  id: 10 + i,
  name: ['竹节排水茶盘', '手织亚麻杯垫', '侧把耐热公道杯'][i],
  price: [289, 59, 128][i],
  tag: ['新上市', '', ''][i]
}))

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const product = PRODUCTS.find(p => p.id === parseInt(id)) || PRODUCTS[0]
  const [selectedStyle, setSelectedStyle] = useState('素色哑光白')
  const [selectedSpec, setSelectedSpec] = useState('双人雅集组')
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const styles = ['素色哑光白', '山川青釉', '墨香雅黑']
  const specs = ['单人静享组', '双人雅集组', '家庭礼盒装']

  const handleAddToCart = () => {
    addToCart(product, 1, `${selectedStyle} / ${selectedSpec}`)
    showToast('已添加到购物车', 'success')
  }

  const handleBuyNow = () => {
    addToCart(product, 1, `${selectedStyle} / ${selectedSpec}`)
    navigate('/checkout')
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="bg-surface/60 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm">
        <nav className="flex justify-between items-center w-full px-margin-mobile py-stack-sm max-w-7xl mx-auto">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 duration-200"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <span className="font-headline-md text-headline-md font-bold text-primary">Yunji</span>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant/50 transition-colors">
              <span className="material-symbols-outlined text-primary">share</span>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant/50 transition-colors">
              <span className="material-symbols-outlined text-primary">more_horiz</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pb-32">
        {/* Hero Image */}
        <section className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }} />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end px-margin-mobile pb-12">
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-white mb-2">手工陶瓷茶具组</h1>
            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <span className="font-display-lg-mobile text-display-lg-mobile text-primary-container">¥{product.price.toFixed(2)}</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-md text-white/80">4.9 (128条评价)</span>
                </div>
              </div>
              <div className="flex gap-1.5 mb-2">
                <div className="w-6 h-1 rounded-full bg-primary-container"></div>
                <div className="w-3 h-1 rounded-full bg-white/40"></div>
                <div className="w-3 h-1 rounded-full bg-white/40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Style Selection */}
        <section className="px-margin-mobile -mt-6 relative z-10">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_8px_24px_rgba(43,45,66,0.08)]">
            <div className="mb-6">
              <h3 className="font-title-lg text-title-lg text-on-background mb-4">款式选择</h3>
              <div className="flex flex-wrap gap-3">
                {styles.map((style) => (
                  <button
                    key={style}
                    className={`px-4 py-2 rounded-full font-label-md border-none active:scale-95 transition-transform ${
                      selectedStyle === style
                        ? 'bg-primary-container text-on-primary-container'
                        : 'bg-secondary-container text-on-secondary-container border border-outline/10'
                    }`}
                    onClick={() => setSelectedStyle(style)}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-title-lg text-title-lg text-on-background mb-4">规格</h3>
              <div className="flex flex-wrap gap-3">
                {specs.map((spec) => (
                  <button
                    key={spec}
                    className={`px-4 py-2 rounded-full font-label-md active:scale-95 transition-transform ${
                      selectedSpec === spec
                        ? 'bg-primary-container text-on-primary-container'
                        : 'bg-secondary-container text-on-secondary-container'
                    }`}
                    onClick={() => setSelectedSpec(spec)}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* User Reviews */}
        <section className="mt-stack-lg">
          <div className="flex items-center justify-between px-margin-mobile mb-4">
            <h3 className="font-title-lg text-title-lg text-on-background">用户评价</h3>
            <button className="text-primary font-label-md flex items-center gap-1">
              查看全部 <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
          <div className="flex overflow-x-auto gap-4 px-margin-mobile hide-scrollbar">
            {reviews.map((review) => (
              <div key={review.id} className="flex-none w-72 bg-surface-container-low rounded-xl p-4 border border-black/5">
                <div className="flex items-center gap-2 mb-2">
                  <img className="w-8 h-8 rounded-full bg-cover" src={review.avatar} alt={review.name} />
                  <span className="font-label-md text-on-surface">{review.name}</span>
                </div>
                <div className="flex text-primary-container text-xs mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-body-md text-on-surface-variant line-clamp-2 italic">{review.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="mt-stack-lg">
          <h3 className="font-title-lg text-title-lg text-on-background px-margin-mobile mb-4">为您推荐</h3>
          <div className="flex overflow-x-auto gap-4 px-margin-mobile hide-scrollbar pb-4">
            {recommendations.map((rec) => (
              <div key={rec.id} className="flex-none w-44">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-2">
                  <img className="w-full h-full object-cover" src={rec.image} alt={rec.name} />
                  {rec.tag && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-secondary-container/20 glass rounded-full text-[10px] text-on-surface-variant font-bold">
                      {rec.tag}
                    </div>
                  )}
                </div>
                <h4 className="font-label-md text-on-surface truncate">{rec.name}</h4>
                <p className="font-body-md text-primary mb-2">¥{rec.price}</p>
                <button className="w-full py-2 rounded-full bg-secondary text-white text-[10px] font-bold hover:opacity-90 active:scale-95 transition-all">
                  加入购物车
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Fixed Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-[0_-8px_24px_rgba(43,45,66,0.08)] safe-area-inset-bottom">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-margin-mobile py-4 gap-4">
          <button
            className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors group"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <span
              className="material-symbols-outlined text-2xl group-active:scale-125 transition-transform"
              style={isFavorite ? { fontVariationSettings: "'FILL' 1", color: '#ff9f1c' } : {}}
            >
              favorite
            </span>
            <span className="text-[10px] font-label-md mt-0.5">想买</span>
          </button>
          <div className="flex-1 flex gap-3">
            <button
              className="flex-1 py-3.5 px-4 rounded-full bg-secondary text-white font-label-md text-center shadow-lg hover:opacity-90 active:scale-95 transition-all"
              onClick={handleAddToCart}
            >
              加入购物车
            </button>
            <button
              className="flex-1 py-3.5 px-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-center shadow-lg hover:opacity-90 active:scale-95 transition-all"
              onClick={handleBuyNow}
            >
              立即购买
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProductDetailPage
