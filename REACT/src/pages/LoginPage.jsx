import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('请输入用户名和密码')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      const result = login(username, password)
      setIsLoading(false)
      if (result.success) {
        navigate('/')
      } else {
        setError(result.error)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-margin-mobile">
      {/* Logo */}
      <div className="mb-8 text-center">
        <h1 className="font-display-lg text-display-lg text-primary mb-2">Yunji</h1>
        <p className="text-on-surface-variant">发现美好生活</p>
      </div>

      {/* Login Form */}
      <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant mb-2 px-1">
            用户名
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-full text-body-md focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="请输入用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface-variant mb-2 px-1">
            密码
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 bg-surface-container-low border-none rounded-full text-body-md focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-error text-body-md text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-3.5 bg-primary-container text-on-primary-container rounded-full font-title-lg font-medium shadow-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? '登录中...' : '登录'}
        </button>
      </form>

      {/* Test Account Info */}
      <div className="mt-8 p-4 bg-surface-container-low rounded-xl w-full max-w-sm">
        <p className="font-label-md text-label-md text-on-surface-variant mb-2">测试账号:</p>
        <p className="text-body-md text-on-surface">用户名: <span className="font-medium">test</span></p>
        <p className="text-body-md text-on-surface">密码: <span className="font-medium">123456</span></p>
        <p className="text-body-md text-on-surface mt-1">或</p>
        <p className="text-body-md text-on-surface">用户名: <span className="font-medium">admin</span></p>
        <p className="text-body-md text-on-surface">密码: <span className="font-medium">admin123</span></p>
      </div>

      {/* Register Link */}
      <p className="mt-6 text-on-surface-variant">
        还没有账号？{' '}
        <Link to="/register" className="text-primary font-medium hover:underline">
          立即注册
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
