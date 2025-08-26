"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { ArrowLeft, Bot, Sparkles } from "lucide-react"

export default function AIPage() {
  const router = useRouter()

  const handleBackToHome = () => {
    router.push("/home")
  }

  return (
    <div className="min-h-screen bg-envesto-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={handleBackToHome} className="text-envesto-gray-600 hover:text-envesto-navy">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-envesto-navy">EnVesto AI</h1>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-envesto-teal/10 rounded-full flex items-center justify-center">
                  <Bot className="h-10 w-10 text-envesto-teal" />
                </div>
              </div>
              <CardTitle className="text-2xl text-envesto-navy mb-2">EnVesto AI</CardTitle>
              <p className="text-envesto-gray-600">Intelligent Financial Assistant for Gig Workers</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-envesto-teal">
                <Sparkles className="h-5 w-5" />
                <span className="text-lg font-semibold">Coming Soon</span>
                <Sparkles className="h-5 w-5" />
              </div>

              <div className="text-left space-y-4 max-w-md mx-auto">
                <h3 className="font-semibold text-envesto-navy">What to expect:</h3>
                <ul className="space-y-2 text-sm text-envesto-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-envesto-teal">•</span>
                    Personalized investment recommendations based on your income patterns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-envesto-teal">•</span>
                    Smart budgeting advice for variable income earners
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-envesto-teal">•</span>
                    Automated expense categorization and insights
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-envesto-teal">•</span>
                    Financial goal planning with AI-powered strategies
                  </li>
                </ul>
              </div>

              <Button onClick={handleBackToHome} className="bg-envesto-teal hover:bg-envesto-teal/90 text-white">
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
