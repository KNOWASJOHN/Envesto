"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import AuthForm from "@/components/auth-form"

export default function LoginPage() {
  const { login, isLoading } = useAuth()
  const router = useRouter()

  const handleLogin = async (email: string, password: string) => {
    await login(email, password)
    router.push("/home")
  }

  return <AuthForm mode="login" onSubmit={handleLogin} isLoading={isLoading} />
}
