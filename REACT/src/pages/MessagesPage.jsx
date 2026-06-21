import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const inboxItems = [
  {
    id: 'dm',
    icon: 'forum',
    label: '私信',
    badge: 4,
    active: true
  },
  {
    id: 'transaction',
    icon: 'notifications_active',
    label: '交易通知',
    badge: null,
    active: false,
    dot: true
  },
  {
    id: 'logistics',
    icon: 'local_shipping',
    label: '物流更新',
    badge: null,
    active: false
  },
  {
    id: 'archived',
    icon: 'archive',
    label: '归档',
    badge: null,
    active: false
  },
  {
    id: 'settings',
    icon: 'settings',
    label: '消息设置',
    badge: null,
    active: false
  }
]

const messages = [
  {
    id: 1,
    name: "Mei's Pottery Studio",
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNTf61im8rHn8GsRtXuPT2Atzg9-g5HpJd0hwlovb-TUcXlslvQsPkPtwwggeN1IDgOp00enW9AIVuMNoyoGorq5hkg5R9RyqE8EKJXrDtEIAY7JeWqluQEc4u3qvO7eHARiGfF51P5Z8-u_lRW9mczruK_D4xNhKxxHj-mmVcZvbSBtc2DiIj_scJl3uXsZTzQzCHsDatgQ0_i6Y6-lgSwx4HsCydYLvBjF99hT_x7xIjk4vXTNJinQ0-leslO2vzjnJOCzB4xYgX',
    lastMessage: '您的定制花瓶已准备好发货！',
    time: '2分钟前',
    isOnline: true,
    orderTag: '订单 #2204',
    isUnread: true,
    chatMessages: [
      {
        id: 1,
        type: 'recipient',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKno0USktoNiVAOLLcgxPwpyd1QKj-yGmiXMpQU640nxA2hcU844jIjgDHAgEzrZ6O78ZNOE3bf5MvQ53ppndr6hmHyNDXa0m1YTRJ-Jw8TYJI-rIAwZGGWdF82oGMCocUlj6m3NSQ4KvdQEbHZz2VrfzM8vmXJruNTQdtEI5_U0LFKZo0mCTQWg7wRASh90MXyYBOsc7TWmeUKKasTUAPYdRJ1LyzrtZHw1jT7GajMBl4lEr1XgnaxjGIlJsxZ2x6IPGqWE17N4kc',
        message: '您好！我刚刚完成了您"天青色"花瓶的上釉。它效果比我们预期的还要好。',
        time: '10:14 AM'
      },
      {
        id: 2,
        type: 'image',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSKk7_3k68VYtigBJbaJ7onXk_eu905cml-BojrctLDIPOblXSx__JJexNQthXQVeWO1IwNrvTgyeatnc-ZdFyAI0s6vUnrXUiYbSdhhfWRxXgwvGRM1XWJvNu3Hl3p-eA0ESJznOWYF917Mb7JXYnvslzCotKddI0eNPY2VWKAUFj9R_GfOfdJCPYxQul22C-AfY-5hYPM2ncT_1HYon6zELU1OfwAT7kOFEqg-6Od-kGafdmAHp08ZXqubL3CTjEvsfwMc-8uPH6',
        time: '10:15 AM'
      },
      {
        id: 3,
        type: 'sender',
        message: '哇，太漂亮了！渐变色正是我想要的。什么时候能发货呢？',
        time: '10:18 AM'
      },
      {
        id: 4,
        type: 'recipient',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2GAya71CZB2A9fR7_lij37F_BpvUr3SByq2Fo3XkyObSC97V_0M0XbXY2FwESvmgbcpFQP0Q7HsTq3as5oi78NPevf8dlUTrsAi6v7Q9VV4QLLO7qcg5xzgqNbxtgwFAFqneZw9nuzcnZpwp26bisU5cZxiyvQfVtQqW4xZ5GnX8PpDyfQHKOnMeq-B4ale4rNrNuRV2L_BfUOhJ8Do-90AWM6_F4QI3VY8DQs2c8nQyDN5ijfmOjiYDh0pOa7j6v46PFlAXIV7qQ',
        message: '今天下午我可以送到物流中心。我会立即提供快递单号。需要使用标准环保包装吗？',
        time: '10:20 AM'
      }
    ]
  },
  {
    id: 2,
    name: 'Liam Studio',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5ry9r4kWfxtZDtCRPOdqpVk_m4e2SkPYqJiKb1SaGwz_1SxWYry-gpOjOkxzmYB3OORNP0wYuqIjBvNEX-wrkhu_xa4-C6Xrk1u7C377oOOfdROc-bQ11pklSVJeBcOslJ5rKAx1PVOGri4knp9TIs2sl3Sita79CWOqtnS6-piHVdnJq1vhuMUQhexKRfU9dpgRZs-ZJNdktqI2M6dWNoG0RY-YqKYigQluf-NlqXGgTkh19M3YdUVnjYoqzmEGwXGQDuwk6AXW',
    lastMessage: '感谢您的购买。我们正在处理...',
    time: '1小时前',
    isOnline: false,
    isUnread: false,
    chatMessages: [
      {
        id: 1,
        type: 'recipient',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5ry9r4kWfxtZDtCRPOdqpVk_m4e2SkPYqJiKb1SaGwz_1SxWYry-gpOjOkxzmYB3OORNP0wYuqIjBvNEX-wrkhu_xa4-C6Xrk1u7C377oOOfdROc-bQ11pklSVJeBcOslJ5rKAx1PVOGri4knp9TIs2sl3Sita79CWOqtnS6-piHVdnJq1vhuMUQhexKRfU9dpgRZs-ZJNdktqI2M6dWNoG0RY-YqKYigQluf-NlqXGgTkh19M3YdUVnjYoqzmEGwXGQDuwk6AXW',
        message: '感谢您的购买！我们正在处理您的订单。',
        time: '9:30 AM'
      },
      {
        id: 2,
        type: 'sender',
        message: '好的，期待收到商品！',
        time: '9:35 AM'
      }
    ]
  },
  {
    id: 3,
    name: 'Essence & Co.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwm5Bz8H28kRvkmj-QSOuOSQ_IDhpjM7-9C-ef4WBD3gDVVZCKf2IE9IPMcn3xcphdhOh9K-PXAd4gJ2oUgqA3CJlBuvzEncpcKUMscdPKV2W8HOdxQjRMNCI4S8Hq2m0C7-hIplUAa2EeTJ_Vzff4bQnl3cE1dNwMDWmaAw0xTpbRgsiioUwhKzihEgT9u5qIcOsSFCfN0i5TV-6c1Zm8r2LZJS5YzMfx2-MmoYGh0ftR_6i9c7-3Bs6o4gr9BRg1WhZ4qhwvJi4U',
    lastMessage: '新香氛系列上市！',
    time: '3小时前',
    isOnline: false,
    isUnread: true,
    chatMessages: [
      {
        id: 1,
        type: 'recipient',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwm5Bz8H28kRvkmj-QSOuOSQ_IDhpjM7-9C-ef4WBD3gDVVZCKf2IE9IPMcn3xcphdhOh9K-PXAd4gJ2oUgqA3CJlBuvzEncpcKUMscdPKV2W8HOdxQjRMNCI4S8Hq2m0C7-hIplUAa2EeTJ_Vzff4bQnl3cE1dNwMDWmaAw0xTpbRgsiioUwhKzihEgT9u5qIcOsSFCfN0i5TV-6c1Zm8r2LZJS5YzMfx2-MmoYGh0ftR_6i9c7-3Bs6o4gr9BRg1WhZ4qhwvJi4U',
        message: '新香氛系列上市啦！这次我们带来了三款全新香型：晨曦、暮光、夜语。',
        time: '8:00 AM'
      },
      {
        id: 2,
        type: 'image',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDHAynOYX5ljNtZ1CBvrDph4ueqZfOpuRn23bjabTzrEI4wY68V4CztMyWm7SsH7LqMzXul-PM3r214EQ8mwlLsvtBczRFaEytX2XZIxUWbk0Kg65x7xv2UeKxWptDFKSTY6gnT-Qh6SMN7KyhRuBhjMNHrbAgDVlbaupp-x7Za9seVssqe1I9CEw-OfLoZ-skf5DwVeDsRefChxS8Z529grNVysCzmv43xHcUWyPTzWrdqNyXvPr9swl58-nHln-EZXPSgOqw17oK',
        time: '8:02 AM'
      }
    ]
  },
  {
    id: 4,
    name: '云集物流',
    avatar: null,
    lastMessage: '包裹已到达上海分拣中心',
    time: '昨天',
    isLogistics: true,
    isUnread: false,
    chatMessages: [
      {
        id: 1,
        type: 'system',
        message: '您的包裹已发货，快递单号：SF1234567890',
        time: '昨天 14:00'
      },
      {
        id: 2,
        type: 'system',
        message: '包裹已到达上海分拣中心',
        time: '昨天 18:30'
      }
    ]
  }
]

const transactionNotifications = [
  {
    id: 1,
    type: 'order_created',
    title: '订单创建成功',
    content: '您已成功购买「手工陶瓷茶具组」，订单号 #2204',
    time: '2分钟前',
    isUnread: true,
    amount: '¥328.00'
  },
  {
    id: 2,
    type: 'payment_success',
    title: '支付成功',
    content: '订单 #2203 支付成功，商家已开始准备发货',
    time: '1小时前',
    isUnread: true,
    amount: '¥198.00'
  },
  {
    id: 3,
    type: 'order_completed',
    title: '订单已完成',
    content: '订单 #2202 已完成，感谢您的购买！快来评价吧',
    time: '昨天',
    isUnread: false,
    amount: '¥89.00'
  },
  {
    id: 4,
    type: 'refund_processing',
    title: '退款处理中',
    content: '订单 #2201 的退款申请正在处理中，预计3-5个工作日退回',
    time: '3天前',
    isUnread: false,
    amount: '¥128.00'
  }
]

const logisticsUpdates = [
  {
    id: 1,
    orderId: '#2204',
    product: '手工陶瓷茶具组',
    status: '运输中',
    carrier: '顺丰速运',
    trackingNo: 'SF1234567890',
    updates: [
      { time: '今天 10:30', location: '上海分拣中心', status: '已到达' },
      { time: '昨天 18:00', location: '杭州发货中心', status: '已发出' },
      { time: '昨天 14:00', location: '商家仓库', status: '已揽收' }
    ],
    estimatedDelivery: '预计明天送达',
    isUnread: true
  },
  {
    id: 2,
    orderId: '#2203',
    product: '匠心系列 · 手作青瓷茶盏',
    status: '已签收',
    carrier: '京东物流',
    trackingNo: 'JD9876543210',
    updates: [
      { time: '昨天 15:30', location: '上海市浦东新区', status: '已签收' },
      { time: '昨天 08:00', location: '上海配送站', status: '派送中' },
      { time: '前天 20:00', location: '上海转运中心', status: '已到达' }
    ],
    estimatedDelivery: '已送达',
    isUnread: false
  }
]

const archivedMessages = [
  {
    id: 1,
    name: 'Vintage Collection',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGCt1T3i6eL9VsfzNT6n4Tbi_d5E1O6nf13lWPYC221ch04i7sycsy4zZx6ixcPg3Z7JJ2ngPKA4le4BkVo4F0VX7XYApkYVZiBgWM09KKCy7w8eFsChD-R52Wog1kYjYAdpqOSqyEvLj8A669rHl_EUxqOcCLlJ90H8wmKncBnMPgd06wRzhCzy6i4gdDXIgyqszAxW5N8Y5j-wYY6Zl9jXD6Is2bUPTBApSYMGh4VF_WXpruHMaTIK4wkXMvutDbt2LoZhexczP9',
    lastMessage: '感谢关注我们的复古系列',
    time: '1周前',
    archivedAt: '2024-10-18'
  },
  {
    id: 2,
    name: '订单 #2105',
    avatar: null,
    lastMessage: '交易已完成',
    time: '2周前',
    archivedAt: '2024-10-15',
    isTransaction: true
  }
]

const defaultSettings = {
  messageNotification: true,
  transactionNotification: true,
  logisticsNotification: true,
  soundEnabled: true,
  vibrationEnabled: false,
  nightModeQuiet: true,
  autoArchiveDays: 30,
  blockedUsers: []
}

function MessagesPage() {
  const navigate = useNavigate()
  const [activeInbox, setActiveInbox] = useState('dm')
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [settings, setSettings] = useState(defaultSettings)
  const [showMobileChat, setShowMobileChat] = useState(false)

  const handleSend = () => {
    if (newMessage.trim() && selectedMessage) {
      // 添加新消息到聊天记录
      const newMsg = {
        id: Date.now(),
        type: 'sender',
        message: newMessage,
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      }
      selectedMessage.chatMessages = [...(selectedMessage.chatMessages || []), newMsg]
      setNewMessage('')
    }
  }

  const handleSelectMessage = (msg) => {
    setSelectedMessage(msg)
    setShowMobileChat(true)
  }

  const handleToggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // 渲染不同收件箱内容
  const renderInboxContent = () => {
    switch (activeInbox) {
      case 'dm':
        return (
          <>
            {/* 消息列表 */}
            <section className="flex flex-col w-full md:w-96 border-r border-outline-variant/20 bg-surface-container-lowest/40 message-scroll overflow-y-auto">
              <div className="p-stack-md flex items-center justify-between bg-white/40 backdrop-blur sticky top-0 z-10 border-b border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <span className="font-title-lg">最近</span>
                  <span className="text-on-surface-variant text-body-md">({messages.length})</span>
                </div>
                <button className="p-1 hover:bg-surface-variant rounded-md">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
              </div>
              <div className="flex flex-col">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 flex gap-4 cursor-pointer transition-colors border-b border-outline-variant/5 ${
                      selectedMessage?.id === msg.id
                        ? 'bg-surface-container hover:bg-surface-container-high border-l-4 border-primary-container'
                        : 'hover:bg-surface-container'
                    }`}
                    onClick={() => handleSelectMessage(msg)}
                  >
                    <div className="relative flex-shrink-0">
                      {msg.avatar ? (
                        <img className="w-12 h-12 rounded-full object-cover" src={msg.avatar} alt={msg.name} />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {msg.isLogistics ? 'local_shipping' : 'notifications'}
                          </span>
                        </div>
                      )}
                      {msg.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className={`font-semibold truncate ${msg.isUnread ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                          {msg.name}
                        </h4>
                        <span className={`text-[10px] whitespace-nowrap ${msg.isUnread ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                          {msg.time}
                        </span>
                      </div>
                      <p className={`text-body-md truncate ${msg.isUnread ? 'text-on-surface font-medium' : 'text-on-surface-variant'}`}>
                        {msg.lastMessage}
                      </p>
                      {msg.orderTag && (
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-label-md text-on-surface-variant bg-surface-variant/30 px-1.5 rounded">
                            {msg.orderTag}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 聊天详情 */}
            <section className={`flex flex-col flex-grow bg-white/20 relative ${showMobileChat ? 'fixed inset-0 z-50 lg:relative lg:z-0' : 'hidden lg:flex'}`}>
              {selectedMessage ? (
                <>
                  {/* 聊天头部 */}
                  <header className="p-4 border-b border-outline-variant/20 flex items-center justify-between glass-header sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                      <button 
                        className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-full"
                        onClick={() => setShowMobileChat(false)}
                      >
                        <span className="material-symbols-outlined">arrow_back</span>
                      </button>
                      {selectedMessage.avatar ? (
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src={selectedMessage.avatar}
                          alt={selectedMessage.name}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {selectedMessage.isLogistics ? 'local_shipping' : 'notifications'}
                          </span>
                        </div>
                      )}
                      <div>
                        <h3 className="font-title-lg leading-none">{selectedMessage.name}</h3>
                        {selectedMessage.isOnline && (
                          <span className="text-label-md text-green-600 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            在线
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-full transition-colors">
                        <span className="material-symbols-outlined">call</span>
                      </button>
                      <button className="p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-full transition-colors">
                        <span className="material-symbols-outlined">videocam</span>
                      </button>
                      <button className="p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-full transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                  </header>

                  {/* 聊天内容 */}
                  <div className="flex-grow p-margin-desktop message-scroll overflow-y-auto flex flex-col gap-6">
                    <div className="flex justify-center">
                      <span className="bg-surface-variant/30 text-on-surface-variant text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                        星期二，10月24日
                      </span>
                    </div>
                    {(selectedMessage.chatMessages || []).map((msg) =>
                      msg.type === 'image' ? (
                        <div key={msg.id} className="flex items-start gap-3 max-w-[80%] ml-11">
                          <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 group cursor-zoom-in">
                            <img className="w-64 h-80 object-cover group-hover:scale-105 transition-transform duration-500" src={msg.image} alt="" />
                          </div>
                        </div>
                      ) : msg.type === 'sender' ? (
                        <div key={msg.id} className="flex items-start gap-3 max-w-[80%] self-end flex-row-reverse">
                          <div className="bg-primary-container text-white p-4 rounded-2xl rounded-tr-none shadow-sm">
                            <p className="text-body-md">{msg.message}</p>
                            <span className="text-[10px] text-on-primary-container mt-2 block text-right">{msg.time}</span>
                          </div>
                        </div>
                      ) : msg.type === 'system' ? (
                        <div key={msg.id} className="flex justify-center">
                          <div className="bg-surface-variant/50 text-on-surface-variant p-3 rounded-xl text-center">
                            <span className="material-symbols-outlined text-sm mb-1">info</span>
                            <p className="text-body-md">{msg.message}</p>
                            <span className="text-[10px] mt-1 block">{msg.time}</span>
                          </div>
                        </div>
                      ) : (
                        <div key={msg.id} className="flex items-start gap-3 max-w-[80%]">
                          <img className="w-8 h-8 rounded-full object-cover mt-1" src={msg.avatar} alt="" />
                          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-outline-variant/10">
                            <p className="text-body-md">{msg.message}</p>
                            <span className="text-[10px] text-on-surface-variant mt-2 block">{msg.time}</span>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* 聊天输入 */}
                  <div className="p-6 bg-white/60 backdrop-blur-md border-t border-outline-variant/20">
                    <div className="max-w-3xl mx-auto flex items-center gap-4 bg-white rounded-full p-1.5 shadow-sm border border-outline-variant/10">
                      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">add_circle</span>
                      </button>
                      <input
                        className="flex-grow border-none focus:ring-0 text-body-md py-2"
                        placeholder="输入消息..."
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      />
                      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">sentiment_satisfied</span>
                      </button>
                      <button
                        className="w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center hover:opacity-90 active:scale-90 transition-all"
                        onClick={handleSend}
                      >
                        <span className="material-symbols-outlined">send</span>
                      </button>
                    </div>
                    <div className="flex justify-center gap-6 mt-3 text-label-md text-on-surface-variant opacity-60">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">image</span>
                        发图片
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">description</span>
                        发文件
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        分享位置
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-on-surface-variant">
                  <span className="material-symbols-outlined text-6xl mb-4 opacity-40">chat_bubble_outline</span>
                  <p className="font-title-lg">选择一个对话开始聊天</p>
                </div>
              )}
            </section>
          </>
        )

      case 'transaction':
        return (
          <section className="flex flex-col flex-grow bg-surface-container-lowest/40 overflow-y-auto">
            <div className="p-stack-md flex items-center justify-between bg-white/40 backdrop-blur sticky top-0 z-10 border-b border-outline-variant/10">
              <div className="flex items-center gap-2">
                <span className="font-title-lg">交易通知</span>
                <span className="text-on-surface-variant text-body-md">({transactionNotifications.length})</span>
              </div>
              <button className="p-1 hover:bg-surface-variant rounded-md">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>
            <div className="flex flex-col gap-3 p-4">
              {transactionNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 bg-white rounded-xl shadow-sm border border-outline-variant/10 ${
                    notification.isUnread ? 'border-l-4 border-l-primary-container' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      notification.type === 'order_created' ? 'bg-primary-container/20' :
                      notification.type === 'payment_success' ? 'bg-green-100' :
                      notification.type === 'order_completed' ? 'bg-secondary-container/20' :
                      'bg-error/10'
                    }`}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {notification.type === 'order_created' ? 'shopping_bag' :
                         notification.type === 'payment_success' ? 'check_circle' :
                         notification.type === 'order_completed' ? 'done_all' :
                         'refund'}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className={`font-semibold ${notification.isUnread ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                          {notification.title}
                        </h4>
                        <span className="text-[10px] text-on-surface-variant">{notification.time}</span>
                      </div>
                      <p className="text-body-md text-on-surface-variant mt-1">{notification.content}</p>
                      {notification.amount && (
                        <span className="text-primary font-bold mt-2 block">{notification.amount}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )

      case 'logistics':
        return (
          <section className="flex flex-col flex-grow bg-surface-container-lowest/40 overflow-y-auto">
            <div className="p-stack-md flex items-center justify-between bg-white/40 backdrop-blur sticky top-0 z-10 border-b border-outline-variant/10">
              <div className="flex items-center gap-2">
                <span className="font-title-lg">物流更新</span>
                <span className="text-on-surface-variant text-body-md">({logisticsUpdates.length})</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4">
              {logisticsUpdates.map((logistics) => (
                <div
                  key={logistics.id}
                  className={`p-4 bg-white rounded-xl shadow-sm border border-outline-variant/10 ${
                    logistics.isUnread ? 'border-l-4 border-l-primary-container' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-on-surface">{logistics.product}</h4>
                      <span className="text-label-md text-on-surface-variant">订单 {logistics.orderId}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-label-md ${
                      logistics.status === '已签收' ? 'bg-green-100 text-green-700' :
                      logistics.status === '运输中' ? 'bg-primary-container/20 text-primary' :
                      'bg-surface-variant text-on-surface-variant'
                    }`}>
                      {logistics.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-label-md text-on-surface-variant mb-3">
                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                    <span>{logistics.carrier}</span>
                    <span className="text-on-surface-variant/60">|</span>
                    <span>{logistics.trackingNo}</span>
                  </div>

                  <div className="space-y-2 border-l-2 border-outline-variant/30 pl-4">
                    {logistics.updates.map((update, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-surface-variant border-2 border-white"></div>
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-body-md text-on-surface">{update.status}</span>
                            <span className="text-label-md text-on-surface-variant ml-2">{update.location}</span>
                          </div>
                          <span className="text-[10px] text-on-surface-variant">{update.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-outline-variant/10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                    <span className="text-label-md text-primary font-medium">{logistics.estimatedDelivery}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )

      case 'archived':
        return (
          <section className="flex flex-col flex-grow bg-surface-container-lowest/40 overflow-y-auto">
            <div className="p-stack-md flex items-center justify-between bg-white/40 backdrop-blur sticky top-0 z-10 border-b border-outline-variant/10">
              <div className="flex items-center gap-2">
                <span className="font-title-lg">归档消息</span>
                <span className="text-on-surface-variant text-body-md">({archivedMessages.length})</span>
              </div>
            </div>
            <div className="flex flex-col">
              {archivedMessages.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-on-surface-variant">
                  <span className="material-symbols-outlined text-6xl mb-4 opacity-40">archive</span>
                  <p className="font-title-lg">暂无归档消息</p>
                  <p className="text-body-md mt-2">超过30天的消息会自动归档</p>
                </div>
              ) : (
                archivedMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="p-4 flex gap-4 border-b border-outline-variant/5 hover:bg-surface-container transition-colors"
                  >
                    <div className="relative flex-shrink-0">
                      {msg.avatar ? (
                        <img className="w-12 h-12 rounded-full object-cover opacity-60" src={msg.avatar} alt={msg.name} />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-surface-variant">
                            {msg.isTransaction ? 'receipt_long' : 'person'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-on-surface-variant truncate">{msg.name}</h4>
                        <span className="text-[10px] text-on-surface-variant">{msg.time}</span>
                      </div>
                      <p className="text-body-md text-on-surface-variant/60 truncate">{msg.lastMessage}</p>
                      <span className="text-label-md text-on-surface-variant/40 mt-1 block">归档于 {msg.archivedAt}</span>
                    </div>
                    <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant/50 rounded-full transition-colors">
                      <span className="material-symbols-outlined">unarchive</span>
                    </button>
                  </div>
                ))
              )}
            </div>
          </section>
        )

      case 'settings':
        return (
          <section className="flex flex-col flex-grow bg-surface-container-lowest/40 overflow-y-auto">
            <div className="p-stack-md bg-white/40 backdrop-blur sticky top-0 z-10 border-b border-outline-variant/10">
              <span className="font-title-lg">消息设置</span>
            </div>
            <div className="flex flex-col gap-4 p-4">
              {/* 通知设置 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-outline-variant/10">
                <h3 className="font-title-lg text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">notifications</span>
                  通知设置
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-body-md text-on-surface">私信通知</span>
                      <span className="text-label-md text-on-surface-variant block">接收私信消息提醒</span>
                    </div>
                    <button
                      className={`w-12 h-7 rounded-full transition-colors ${
                        settings.messageNotification ? 'bg-primary-container' : 'bg-surface-variant'
                      }`}
                      onClick={() => handleToggleSetting('messageNotification')}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                        settings.messageNotification ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-body-md text-on-surface">交易通知</span>
                      <span className="text-label-md text-on-surface-variant block">订单状态变更提醒</span>
                    </div>
                    <button
                      className={`w-12 h-7 rounded-full transition-colors ${
                        settings.transactionNotification ? 'bg-primary-container' : 'bg-surface-variant'
                      }`}
                      onClick={() => handleToggleSetting('transactionNotification')}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                        settings.transactionNotification ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-body-md text-on-surface">物流通知</span>
                      <span className="text-label-md text-on-surface-variant block">包裹运输状态更新</span>
                    </div>
                    <button
                      className={`w-12 h-7 rounded-full transition-colors ${
                        settings.logisticsNotification ? 'bg-primary-container' : 'bg-surface-variant'
                      }`}
                      onClick={() => handleToggleSetting('logisticsNotification')}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                        settings.logisticsNotification ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* 提醒方式 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-outline-variant/10">
                <h3 className="font-title-lg text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">volume_up</span>
                  提醒方式
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-body-md text-on-surface">声音提醒</span>
                      <span className="text-label-md text-on-surface-variant block">收到消息时播放提示音</span>
                    </div>
                    <button
                      className={`w-12 h-7 rounded-full transition-colors ${
                        settings.soundEnabled ? 'bg-primary-container' : 'bg-surface-variant'
                      }`}
                      onClick={() => handleToggleSetting('soundEnabled')}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                        settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-body-md text-on-surface">震动提醒</span>
                      <span className="text-label-md text-on-surface-variant block">收到消息时震动提示</span>
                    </div>
                    <button
                      className={`w-12 h-7 rounded-full transition-colors ${
                        settings.vibrationEnabled ? 'bg-primary-container' : 'bg-surface-variant'
                      }`}
                      onClick={() => handleToggleSetting('vibrationEnabled')}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                        settings.vibrationEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-body-md text-on-surface">夜间免打扰</span>
                      <span className="text-label-md text-on-surface-variant block">22:00-08:00 期间静音</span>
                    </div>
                    <button
                      className={`w-12 h-7 rounded-full transition-colors ${
                        settings.nightModeQuiet ? 'bg-primary-container' : 'bg-surface-variant'
                      }`}
                      onClick={() => handleToggleSetting('nightModeQuiet')}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                        settings.nightModeQuiet ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* 自动归档 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-outline-variant/10">
                <h3 className="font-title-lg text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">auto_mode</span>
                  自动归档
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-body-md text-on-surface">自动归档天数</span>
                    <span className="text-label-md text-on-surface-variant block">超过设定天数自动归档消息</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center hover:bg-surface-variant/80"
                      onClick={() => setSettings(prev => ({ ...prev, autoArchiveDays: Math.max(7, prev.autoArchiveDays - 7) }))}
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="text-body-md font-bold w-16 text-center">{settings.autoArchiveDays} 天</span>
                    <button
                      className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center hover:bg-surface-variant/80"
                      onClick={() => setSettings(prev => ({ ...prev, autoArchiveDays: Math.min(90, prev.autoArchiveDays + 7) }))}
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 黑名单 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-outline-variant/10">
                <h3 className="font-title-lg text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">block</span>
                  黑名单管理
                </h3>
                {settings.blockedUsers.length === 0 ? (
                  <div className="text-center py-4 text-on-surface-variant">
                    <span className="material-symbols-outlined text-3xl mb-2 opacity-40">person_off</span>
                    <p className="text-body-md">暂无屏蔽用户</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {settings.blockedUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-surface-variant/30 rounded-lg">
                        <span className="text-body-md">{user}</span>
                        <button className="text-primary text-label-md">解除</button>
                      </div>
                    ))}
                  </div>
                )}
                <button className="mt-4 w-full py-2 bg-surface-variant rounded-lg text-on-surface-variant font-label-md hover:bg-surface-variant/80 transition-colors">
                  添加屏蔽用户
                </button>
              </div>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-surface/60 backdrop-blur-xl shadow-sm docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile py-stack-sm max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="font-headline-md text-headline-md font-bold text-primary">Yunji</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-body-md focus:ring-2 focus:ring-primary-container w-64 transition-all"
                placeholder="搜索对话..."
                type="text"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex max-w-7xl mx-auto w-full h-[calc(100vh-64px)] px-margin-mobile gap-gutter">
        {/* 左侧栏 */}
        <aside className="hidden md:flex flex-col w-72 py-stack-lg border-r border-outline-variant/20 overflow-y-auto">
          <h2 className="font-headline-md text-headline-md mb-6 px-4">收件箱</h2>
          <nav className="flex flex-col gap-2 px-2">
            {inboxItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                  activeInbox === item.id
                    ? 'bg-primary-container/10 text-primary active-pill'
                    : 'text-on-surface-variant hover:bg-surface-variant/40'
                }`}
                onClick={() => setActiveInbox(item.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined" style={item.active ? { fontVariationSettings: "'FILL' 1" } : {}}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-primary-container text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.dot && <span className="w-2 h-2 rounded-full bg-primary-container"></span>}
              </button>
            ))}
          </nav>

          {/* 安全卡片 */}
          <div className="mt-auto px-4 pb-12">
            <div className="bg-secondary-container p-4 rounded-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <p className="font-title-lg text-on-secondary-container leading-tight">安全支付</p>
                <p className="text-label-md mt-1 opacity-80">所有对话均已加密保护您的隐私。</p>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-6xl text-primary/10 group-hover:scale-110 transition-transform">
                verified_user
              </span>
            </div>
          </div>
        </aside>

        {/* 移动端收件箱选择 */}
        <div className="md:hidden flex gap-2 p-2 overflow-x-auto hide-scrollbar">
          {inboxItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeInbox === item.id
                  ? 'bg-primary-container text-on-primary-container'
                  : 'bg-surface-variant text-on-surface-variant'
              }`}
              onClick={() => setActiveInbox(item.id)}
            >
              <span className="material-symbols-outlined text-sm">{item.icon}</span>
              <span className="text-label-md">{item.label}</span>
              {item.badge && (
                <span className="bg-on-primary-container text-primary-container text-[10px] font-bold px-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 收件箱内容 */}
        <div className="flex flex-grow overflow-hidden">
          {renderInboxContent()}
        </div>
      </main>
    </div>
  )
}

export default MessagesPage