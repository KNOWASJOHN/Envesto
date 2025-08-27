"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import AuthForm from "@/components/auth-form"

export default function SignupPage() {
  const { signup, isLoading } = useAuth()
  const router = useRouter()
  const [error, setError] = useState("")

  const handleSignup = async (email: string, password: string) => {
    try {
      setError("")
      await signup(email, password)
      router.push("/info")
    } catch (error: any) {
      const errorMessage = error.code === 'auth/email-already-in-use'
        ? 'This email is already registered. Please login instead.'
        : error.code === 'auth/invalid-email'
        ? 'Invalid email address.'
        : error.code === 'auth/weak-password'
        ? 'Password should be at least 6 characters.'
        : 'An error occurred. Please try again.'
      setError(errorMessage)
    }
  }

  return <AuthForm 
    mode="signup" 
    onSubmit={handleSignup} 
    isLoading={isLoading}
    error={error}
  />
}
