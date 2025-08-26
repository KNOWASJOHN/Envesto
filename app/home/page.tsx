"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { Calculator, Bot, TrendingUp, Shield, Clock, Target } from "lucide-react"

export default function HomePage() {
  const router = useRouter()
  const { user } = useAuth()

  const handleExpenseCalculator = () => {
    router.push("/expense")
  }

  const handleEnvestoAI = () => {
    router.push("/ai")
  }

  const problemSolutions = [
    {
      icon: <TrendingUp className="h-8 w-8 text-envesto-teal" />,
      title: "Variable Income Management",
      description: "Track and plan your finances even with irregular gig work income patterns.",
    },
    {
      icon: <Shield className="h-8 w-8 text-envesto-teal" />,
      title: "Financial Security",
      description: "Build emergency funds and investment strategies tailored for gig workers.",
    },
    {
      icon: <Clock className="h-8 w-8 text-envesto-teal" />,
      title: "Real-time Expense Tracking",
      description: "Monitor your spending habits and get instant insights on your financial health.",
    },
    {
      icon: <Target className="h-8 w-8 text-envesto-teal" />,
      title: "Smart Investment Goals",
      description: "Set and achieve investment targets that align with your variable income schedule.",
    },
  ]

  return (
    <div className="min-h-screen bg-envesto-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {user?.name && (
          <div className="mb-8 text-center">
            <p className="text-envesto-gray-600">Welcome back,</p>
            <h2 className="text-2xl font-semibold text-envesto-navy">{user.name}!</h2>
          </div>
        )}

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-envesto-navy mb-4">EnVesto</h1>
          <p className="text-xl md:text-2xl text-envesto-gray-600 mb-8">Earn and Invest</p>

          {/* Company Mission */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-base md:text-lg text-envesto-gray-700 leading-relaxed">
              Empowering gig workers and variable-income earners with smart financial tools. We understand the unique
              challenges of irregular income and provide personalized solutions to help you build wealth, manage
              expenses, and secure your financial future.
            </p>
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={handleExpenseCalculator}
              size="lg"
              className="bg-envesto-teal hover:bg-envesto-teal/90 text-white px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Expense Calculator
            </Button>
            <Button
              onClick={handleEnvestoAI}
              size="lg"
              variant="outline"
              className="border-2 border-envesto-teal text-envesto-teal hover:bg-envesto-teal hover:text-white px-8 py-4 text-lg bg-transparent transition-all duration-200 hover:shadow-lg"
            >
              <Bot className="mr-2 h-5 w-5" />
              EnVesto AI
            </Button>
          </div>
        </div>

        {/* Problem-Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemSolutions.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-envesto-gray-200"
            >
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <CardTitle className="text-lg text-envesto-navy">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-envesto-gray-600 leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
