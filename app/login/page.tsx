"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import AuthForm from "@/components/auth-form"

export default function LoginPage() {
  const { login, isLoading } = useAuth()
  const router = useRouter()
  const [error, setError] = useState("")

  const handleLogin = async (email: string, password: string) => {
    try {
      setError("")
      await login(email, password)
      router.push("/home")
    } catch (error: any) {
      const errorMessage = error.code === 'auth/user-not-found'
        ? 'User not found. Please sign up for an account.'
        : error.code === 'auth/wrong-password'
        ? 'Invalid password. Please try again.'
        : error.code === 'auth/invalid-email'
        ? 'Invalid email address.'
        : 'An error occurred. Please try again.'
      setError(errorMessage)
    }
  }

  return <AuthForm 
    mode="login" 
    onSubmit={handleLogin} 
    isLoading={isLoading}
    error={error}
  />
}
