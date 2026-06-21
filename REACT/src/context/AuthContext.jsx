import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

// Test users database
const TEST_USERS = [
  { id: 1, username: 'test', password: '123456', email: 'test@yunji.com', name: 'Elena Chen', isGoldMember: true },
  { id: 2, username: 'admin', password: 'admin123', email: 'admin@yunji.com', name: 'Admin User', isGoldMember: false }
]

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved session
    const savedUser = localStorage.getItem('yunji_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = (username, password) => {
    const foundUser = TEST_USERS.find(
      u => u.username === username && u.password === password
    )
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem('yunji_user', JSON.stringify(userWithoutPassword))
      return { success: true }
    }
    return { success: false, error: '用户名或密码错误' }
  }

  const register = (username, password, email, name) => {
    // Check if username already exists
    if (TEST_USERS.find(u => u.username === username)) {
      return { success: false, error: '用户名已存在' }
    }

    const newUser = {
      id: TEST_USERS.length + 1,
      username,
      password,
      email,
      name: name || username,
      isGoldMember: false
    }
    TEST_USERS.push(newUser)

    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem('yunji_user', JSON.stringify(userWithoutPassword))
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('yunji_user')
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
