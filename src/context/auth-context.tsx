
import React, { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

type User = {
  id: string
  email: string
  name: string
} | null

type AuthContextType = {
  user: User
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error?: {message: string}, success?: boolean }>
  signUp: (email: string, password: string, name: string) => Promise<{ error?: {message: string}, success?: boolean }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error?: {message: string}, success?: boolean }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is already logged in
    const checkAuthState = async () => {
      try {
        // Mock authentication check - replace with your actual auth logic
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error('Error checking auth state:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuthState()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      // Mock authentication - replace with your actual auth logic
      if (email && password) {
        const mockUser = { id: '123', email, name: 'Test User' }
        setUser(mockUser)
        localStorage.setItem('user', JSON.stringify(mockUser))
        navigate('/')
        return { success: true }
      }
      return { error: { message: 'Invalid credentials' } }
    } catch (error: any) {
      return { error: { message: error.message || 'An error occurred during sign in' } }
    }
  }

  const signUp = async (email: string, password: string, name: string) => {
    try {
      // Mock signup - replace with your actual signup logic
      if (email && password && name) {
        const mockUser = { id: '123', email, name }
        setUser(mockUser)
        localStorage.setItem('user', JSON.stringify(mockUser))
        navigate('/')
        return { success: true }
      }
      return { error: { message: 'Invalid credentials' } }
    } catch (error: any) {
      return { error: { message: error.message || 'An error occurred during sign up' } }
    }
  }

  const signOut = async () => {
    // Mock sign out - replace with your actual sign out logic
    setUser(null)
    localStorage.removeItem('user')
    navigate('/login')
  }

  const resetPassword = async (email: string) => {
    try {
      // Mock password reset - replace with your actual reset logic
      if (email) {
        return { success: true }
      }
      return { error: { message: 'Invalid email' } }
    } catch (error: any) {
      return { error: { message: error.message || 'An error occurred during password reset' } }
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
