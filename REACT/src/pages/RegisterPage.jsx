import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function RegisterPage() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!username || !password || !email) {
      setError('请填写所有必填项')
      return
    }

    if (username.length < 3) {
      setError('用户名至少需要3个字符')
      return
    }

    if (password.length < 6) {
      setError('密码至少需要6个字符')
      return
    }

    if (password !== confirmPassword) {
      setError('两次输入的密码不一致')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      const result = register(username, password, email, name)
      setIsLoading(false)
      if (result.success) {
        navigate('/')
      } else {
        setError(result.error)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-margin-mobile py-8">
      {/* Logo */}
      <div className="mb-6 text-center">
        <h1 className="font-display-lg text-display-lg text-primary mb-2">Yunji</h1>
        <p className="text-on-surface-variant">加入我们，发现美好生活</p>
      </div>

      {/* Register Form */}
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant mb-1.5 px-1">
            用户名 <span className="text-error">*</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-full text-body-md focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="请输入用户名（至少3个字符）"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant mb-1.5 px-1">
            邮箱 <span className="text-error">*</span>
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-full text-body-md focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="请输入邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant mb-1.5 px-1">
            昵称
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-full text-body-md focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="请输入昵称（选填）"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant mb-1.5 px-1">
            密码 <span className="text-error">*</span>
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-full text-body-md focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="请输入密码（至少6个字符）"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant mb-1.5 px-1">
            确认密码 <span className="text-error">*</span>
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-full text-body-md focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="请再次输入密码"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-error text-body-md text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-3.5 bg-primary-container text-on-primary-container rounded-full font-title-lg font-medium shadow-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 mt-2"
          disabled={isLoading}
        >
          {isLoading ? '注册中...' : '注册'}
        </button>
      </form>

      {/* Terms */}
      <p className="mt-4 text-center text-on-surface-variant text-body-md">
        注册即表示您同意我们的
        <button className="text-primary hover:underline ml-1">服务条款</button>
        和
        <button className="text-primary hover:underline ml-1">隐私政策</button>
      </p>

      {/* Login Link */}
      <p className="mt-4 text-on-surface-variant">
        已有账号？{' '}
        <Link to="/login" className="text-primary font-medium hover:underline">
          立即登录
        </Link>
      </p>
    </div>
  )
}

export default RegisterPage
