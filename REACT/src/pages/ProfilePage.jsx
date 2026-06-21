import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProfilePage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [isLoggedIn] = useState(!!user)

  const stats = [
    { label: '粉丝', value: '1.2k' },
    { label: '关注', value: '482' },
    { label: '优惠券', value: '12' }
  ]

  const orderTabs = [
    { icon: 'payments', label: '待付款', badge: null },
    { icon: 'package_2', label: '待发货', badge: 2 },
    { icon: 'local_shipping', label: '待收货', badge: null },
    { icon: 'rate_review', label: '待评价', badge: null }
  ]

  const services = [
    { icon: 'support_agent', label: '客服' },
    { icon: 'location_on', label: '地址' },
    { icon: 'post_add', label: '我的帖子' },
    { icon: 'favorite', label: '收藏' },
    { icon: 'history', label: '浏览记录' },
    { icon: 'account_balance_wallet', label: '钱包' },
    { icon: 'redeem', label: '奖励' },
    { icon: 'settings', label: '设置' }
  ]

  const collections = [
    {
      id: 1,
      title: 'Living Essentials',
      items: 24,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcWLOMU3MvNadDvfFWE-M3KRpc7_G-z6KEMuy2zQO0m3Hro-cMlKFKMH5oIxhyaSnQTeAOsKwQrpoBsYiE-pNTK3Xxm-y4WEGvVguUd9ol3bzVepmhQfRtRrMGAzC5ESH10-wFk6UzgwJTftpditPlazajVuVUS3N5HKQWhRs63DZs2bkAqG2ePayc-817hYkmG4ClExt8lWJisz1upyj0P83lfOlAuZ9qdVoxld1ro5kjG0P2ylWi-t3eoJ2ozAG59jvq1lV11bdN'
    },
    {
      id: 2,
      title: 'Beauty Rituals',
      items: 12,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK0vU7BLILOpCp70Jnvnn8yprL3RhySGzZs3Py8KrLZjKWYnuD6Q1kuA1G8_6e8VxUkR6-iqKtuq6kJ9XBTpPV7K5Maz8vDMXDJwKwKQ3kJ_D7EWCgLds79u_maKkdARs6nkKWYyzWiraF5h2Bdg0IsDYTC9e7Xx70HgLWiaC4fxWlArSN6Y2z-17mHH0tn0bXfQCZo9MHZs72fjw912rKUqxvuGTv6oyXzOARtxNpoIHs5eg7dD22ankenIvOvoC40p2Mflza_Lg3'
    },
    {
      id: 3,
      title: 'Workspaces',
      items: 8,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrQ_L9v_3TbHOKV3Wf5rZbNRIRrtqrsfwwj8Np3Srsk6HoLO5zBMSz5W3PlPYH9Gf25yfpnv-5V6kfT1tBl6iUyO-FZrs-N7EqgjgZ52n4NgcJmQA44H9iPOmvDwquGsLTd9yyL26dRh3FmjHQNi414unNs0gcFtXBHInsu3p0RUBEp0m8-D9suRv3y-AkS2dTLiBYcBQhq3rX0r492x7J0JwqUitM-aQe_xwpEgESNWtzXZwT3NW8-62jQKxwrXwrjyEVB6E8cVWE'
    }
  ]

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-margin-mobile">
        <div className="w-32 h-32 mb-6">
          <img
            className="w-full h-full object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK-IQRGrMMcJRLPD_-aevAWb6oEYYbiLO4QUF2eJv5rxaJLxbxvKLIn1OfLw_R2_MIVhcRa4Co2NK2LW8Bmrud9piBnt_SxxWCRt7WiGMskDmgrEdbii5jGDh9-zkyqW9ErSGIiyej6fbu4r7wgwGOizlG0WlXmNVVg9ffeqFAhfYqHEhgrBWsSXe-3wclv0Os8D_dUJXh9pwGFlyyc61WlZdDqMFg8qsxyjBE6CQLpI4CGAzMVS_uHsoA-JDprnPlQr7lrMIW7mip"
            alt="未登录"
          />
        </div>
        <h2 className="font-headline-md text-headline-md text-on-background mb-2">登录后查看您的专属内容</h2>
        <p className="text-on-surface-variant mb-6 text-center">登录后即可享受会员专属权益</p>
        <button
          className="bg-primary-container text-on-primary-container px-8 py-3 rounded-full font-title-lg shadow-lg hover:scale-95 transition-transform active:scale-90"
          onClick={() => navigate('/login')}
        >
          登录 / 注册
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="bg-surface/60 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm">
        <div className="flex justify-between items-center w-full px-margin-mobile py-stack-sm max-w-7xl mx-auto">
          <h1 className="font-headline-md text-headline-md font-bold text-primary">Yunji</h1>
          <div className="flex gap-4">
            <button className="p-2 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-on-surface-variant">camera_alt</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-variant/50 transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-on-surface-variant">settings</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-xl mx-auto">
        {/* User Profile Header */}
        <section className="glass-header px-margin-mobile pt-stack-lg pb-stack-lg rounded-b-[40px] shadow-sm">
          <div className="flex items-center gap-stack-md">
            <div className="relative">
              <img
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDuTxhsOkTUU138-GI4Me4XHiRrJR_7lKdvHKn1zvrplpLJ-_tUI7ymlkdG5vOKnuD2m9WCjUTHYkLHk5uH6RnigkAkTQndFvfgCrLHKURyvY1kn7YbqkwZ5G8A6slDRO--cU2OhDAW0h6xqbbtszawhgj7dENbYn-rgi_WaeY4tfrGC2flze0sQut_cF9KFvDRWYG35rwkzf4NS0RzIWzD53wltXKXPsgbuYhK4w6hVKE-4-zxFkep4R55D82EcL1u0y5TbelL_25"
                alt={user?.name || '用户'}
              />
              <div className="absolute bottom-0 right-0 bg-primary-container text-white p-1 rounded-full border-2 border-white">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h2 className="font-headline-md text-headline-md text-on-background">{user?.name || 'Elena Chen'}</h2>
                <span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Gold Member
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant">Curator of fine lifestyle aesthetics</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">
                  ID: 8829410
                </span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex justify-between items-center mt-stack-lg bg-white/40 backdrop-blur-md rounded-2xl p-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center flex-1 ${index !== stats.length - 1 ? 'border-r border-outline-variant/30' : ''}`}
              >
                <span className="font-title-lg text-title-lg text-primary">{stat.value}</span>
                <span className="font-label-md text-label-md text-on-surface-variant">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Order Management */}
        <section className="px-margin-mobile mt-stack-lg">
          <div className="bg-surface-container-lowest rounded-[32px] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-stack-md">
              <h3 className="font-title-lg text-title-lg">我的订单</h3>
              <button className="flex items-center text-primary font-label-md">
                查看全部 <span className="material-symbols-outlined text-[18px] ml-1">chevron_right</span>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {orderTabs.map((tab) => (
                <button key={tab.label} className="flex flex-col items-center gap-2 transition-active">
                  <div className="w-12 h-12 rounded-2xl bg-primary-fixed/30 flex items-center justify-center text-primary relative">
                    <span className="material-symbols-outlined">{tab.icon}</span>
                    {tab.badge && (
                      <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                        {tab.badge}
                      </span>
                    )}
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Banner */}
        <section className="px-margin-mobile mt-stack-md">
          <div className="bg-gradient-to-r from-tertiary-container to-primary-container rounded-2xl p-4 flex items-center justify-between text-white shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <p className="font-title-lg text-white">Yunji Prime Lounge</p>
              <p className="font-label-md opacity-90">解锁专属会员权益和提前购买权</p>
            </div>
            <button className="relative z-10 bg-white text-primary font-bold px-4 py-2 rounded-full text-xs transition-active">
              立即加入
            </button>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-[100px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
          </div>
        </section>

        {/* Service Grid */}
        <section className="px-margin-mobile mt-stack-md">
          <div className="bg-surface-container-lowest rounded-[32px] p-6 shadow-sm">
            <h3 className="font-title-lg text-title-lg mb-stack-md">更多服务</h3>
            <div className="grid grid-cols-4 gap-y-stack-lg gap-x-2">
              {services.map((service) => (
                <button key={service.label} className="flex flex-col items-center gap-2 transition-active">
                  <span className="material-symbols-outlined text-primary text-[28px]">{service.icon}</span>
                  <span className="font-label-md text-label-md text-on-surface-variant text-center">{service.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="px-margin-mobile mt-stack-lg mb-8">
          <h3 className="font-title-lg text-title-lg mb-stack-md">我的收藏</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm transition-active">
                <img className="w-full aspect-[4/5] object-cover" src={collections[0].image} alt={collections[0].title} />
                <div className="p-3">
                  <p className="font-label-md text-primary">{collections[0].title}</p>
                  <p className="text-[10px] text-on-surface-variant">{collections[0].items} 件宝贝</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden bg-white shadow-sm transition-active">
                <div className="p-4 bg-secondary-container/20 h-24 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-4xl">add_circle</span>
                </div>
                <div className="p-3">
                  <p className="font-label-md text-on-surface-variant">创建新收藏</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {collections.slice(1).map((col) => (
                <div key={col.id} className="rounded-3xl overflow-hidden bg-white shadow-sm transition-active">
                  <img className="w-full aspect-square object-cover" src={col.image} alt={col.title} />
                  <div className="p-3">
                    <p className="font-label-md text-primary">{col.title}</p>
                    <p className="text-[10px] text-on-surface-variant">{col.items} 件宝贝</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProfilePage
