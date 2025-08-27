"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { ArrowLeft, Bot, Sparkles } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"

export default function AIPage() {
  const router = useRouter()

  const handleBackToHome = () => {
    router.push("/home")
  }

  return (
    <div className="min-h-screen bg-envesto-gray-50">
      <Header />

      <PageTransition>
        <main className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
            <Button variant="ghost" onClick={handleBackToHome} className="text-envesto-gray-600 hover:text-envesto-navy">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-3xl font-bold text-envesto-navy">EnVesto AI</h1>
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="text-center">
              <CardHeader className="pb-4">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-4"
                >
                  <div className="w-20 h-20 bg-envesto-teal/10 rounded-full flex items-center justify-center">
                    <Bot className="h-10 w-10 text-envesto-teal" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <CardTitle className="text-2xl text-envesto-navy mb-2">EnVesto AI</CardTitle>
                  <p className="text-envesto-gray-600">Intelligent Financial Assistant for Gig Workers</p>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2 text-envesto-teal"
                >
                  <Sparkles className="h-5 w-5" />
                  <span className="text-lg font-semibold">Coming Soon</span>
                  <Sparkles className="h-5 w-5" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-left space-y-4 max-w-md mx-auto"
                >
                  <h3 className="font-semibold text-envesto-navy">What to expect:</h3>
                  <ul className="space-y-2 text-sm text-envesto-gray-700">
                    {[
                      "Personalized investment recommendations based on your income patterns",
                      "Smart budgeting advice for variable income earners",
                      "Automated expense categorization and insights",
                      "Financial goal planning with AI-powered strategies"
                    ].map((text, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + (index * 0.1) }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-envesto-teal">•</span>
                        {text}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <Button onClick={handleBackToHome} className="bg-envesto-teal hover:bg-envesto-teal/90 text-white">
                    Back to Home
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </PageTransition>
    </div>
  )
}
