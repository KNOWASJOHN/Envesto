"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import AuthForm from "@/components/auth-form"

export default function SignupPage() {
  const { signup, isLoading } = useAuth()
  const router = useRouter()

  const handleSignup = async (email: string, password: string) => {
    await signup(email, password)
    router.push("/info")
  }

  return <AuthForm mode="signup" onSubmit={handleSignup} isLoading={isLoading} />
}
