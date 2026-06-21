import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CheckoutPage() {
  const navigate = useNavigate()
  const { getSelectedItems, getTotalPrice, getTotalDiscount, clearCart } = useCart()
  const [selectedPayment, setSelectedPayment] = useState('wechat')
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const selectedItems = getSelectedItems()
  const subtotal = getTotalPrice()
  const discount = getTotalDiscount()
  const shipping = 12.00
  const coupon = 20.00
  const total = subtotal + shipping - coupon

  const handlePayment = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentSuccess(true)
      setTimeout(() => {
        clearCart()
        alert(`订单 #YJ-${Math.random().toString(36).substr(2, 9).toUpperCase()} 提交成功！`)
        navigate('/')
      }, 1000)
    }, 1800)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-surface/60 backdrop-blur-xl sticky top-0 z-50 shadow-sm px-margin-mobile">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto h-16">
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-surface-variant/50 transition-colors rounded-full active:scale-95 duration-200"
              onClick={() => navigate(-1)}
            >
              <span className="material-symbols-outlined text-primary">arrow_back</span>
            </button>
            <h1 className="font-headline-md text-headline-md font-bold text-primary">确认订单</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant">lock</span>
            <span className="font-label-md text-label-md text-on-surface-variant">安全加密</span>
          </div>
        </div>
      </header>

      <main className="w-full max-w-2xl px-margin-mobile py-stack-lg flex flex-col gap-stack-lg pb-32">
        {/* Delivery Address */}
        <section className="flex flex-col gap-stack-sm">
          <span className="font-label-md text-label-md text-outline uppercase tracking-widest px-1">配送地址</span>
          <div className="bg-surface-container-low p-5 rounded-xl flex items-start gap-4 shadow-sm border border-black/[0.03]">
            <div className="bg-primary-container/20 p-3 rounded-full">
              <span className="material-symbols-outlined text-primary">location_on</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="font-title-lg text-title-lg text-on-background">陈伟</p>
                <button className="text-primary font-label-md text-label-md hover:underline">修改</button>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">上海市静安区南京西路128号</p>
              <p className="font-label-md text-label-md text-outline mt-2">138 **** 9012</p>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="flex flex-col gap-stack-sm">
          <span className="font-label-md text-label-md text-outline uppercase tracking-widest px-1">订单详情</span>
          <div className="glass rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(43,45,66,0.05)] border border-black/[0.03]">
            <div className="p-5 flex flex-col gap-stack-md">
              {selectedItems.map((item) => (
                <div key={`${item.product.id}-${item.specs}`} className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-highest">
                    <img className="w-full h-full object-cover" src={item.product.image} alt={item.product.name} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-title-lg text-title-lg text-on-background line-clamp-1">{item.product.name}</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant">{item.specs || '标准规格'}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-body-md text-body-md font-bold text-on-background">¥{item.product.price.toFixed(2)}</span>
                      <span className="font-label-md text-label-md bg-secondary-container/50 px-2 py-0.5 rounded text-on-secondary-container">x{item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="flex flex-col gap-stack-sm">
          <span className="font-label-md text-label-md text-outline uppercase tracking-widest px-1">支付方式</span>
          <div className="flex flex-col gap-3">
            <label
              className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedPayment === 'wechat'
                  ? 'border-primary-container bg-surface-container-lowest'
                  : 'border-outline-variant bg-surface hover:bg-surface-container-low'
              }`}
              onClick={() => setSelectedPayment('wechat')}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#07C160]/10 rounded-lg">
                  <span className="material-symbols-outlined text-[#07C160]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    payments
                  </span>
                </div>
                <span className="font-title-lg text-title-lg">微信支付</span>
              </div>
              <input
                checked={selectedPayment === 'wechat'}
                onChange={() => setSelectedPayment('wechat')}
                className="w-5 h-5 text-primary-container border-outline focus:ring-primary-container"
                name="payment"
                type="radio"
              />
            </label>
            <label
              className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedPayment === 'alipay'
                  ? 'border-primary-container bg-surface-container-lowest'
                  : 'border-outline-variant bg-surface hover:bg-surface-container-low'
              }`}
              onClick={() => setSelectedPayment('alipay')}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1677FF]/10 rounded-lg">
                  <span className="material-symbols-outlined text-[#1677FF]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    wallet
                  </span>
                </div>
                <span className="font-title-lg text-title-lg">支付宝</span>
              </div>
              <input
                checked={selectedPayment === 'alipay'}
                onChange={() => setSelectedPayment('alipay')}
                className="w-5 h-5 text-primary-container border-outline focus:ring-primary-container"
                name="payment"
                type="radio"
              />
            </label>
          </div>
        </section>

        {/* Fee Breakdown */}
        <section className="bg-surface-container-high/40 rounded-2xl p-6 border border-white/40 shadow-sm">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-on-surface-variant">
              <span className="font-body-md text-body-md">商品小计</span>
              <span className="font-body-md text-body-md">¥{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-on-surface-variant">
              <span className="font-body-md text-body-md">运费</span>
              <span className="font-body-md text-body-md">¥{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-primary font-medium">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">confirmation_number</span>
                <span className="font-body-md text-body-md">优惠券 (FIRSTORDER)</span>
              </div>
              <span className="font-body-md text-body-md">-¥{coupon.toFixed(2)}</span>
            </div>
            <div className="pt-4 mt-2 border-t border-outline-variant/50 flex justify-between items-center">
              <span className="font-title-lg text-title-lg text-on-background font-bold">合计金额</span>
              <span className="text-2xl font-bold text-primary">¥{total.toFixed(2)}</span>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-2xl px-margin-mobile pt-4 pb-8 z-50 shadow-[0_-8px_24px_rgba(43,45,66,0.08)]">
        <div className="max-w-2xl mx-auto">
          <button
            className={`w-full py-4 rounded-full text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              paymentSuccess
                ? 'bg-green-600 text-white'
                : 'bg-primary-container text-on-primary-container hover:opacity-90 active:scale-95'
            }`}
            onClick={handlePayment}
            disabled={isProcessing || paymentSuccess}
          >
            {isProcessing ? (
              <>
                <span className="material-symbols-outlined animate-spin">refresh</span>
                <span>处理中...</span>
              </>
            ) : paymentSuccess ? (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                <span>支付成功</span>
              </>
            ) : (
              <>
                <span>确认支付 · ¥{total.toFixed(2)}</span>
                <span className="material-symbols-outlined">chevron_right</span>
              </>
            )}
          </button>
          <p className="text-center text-outline font-label-md text-label-md mt-4">
            点击确认即表示您同意云集的服务条款
          </p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
