"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import ExpenseTable from "@/components/expense-table"
import { ArrowLeft, TrendingDown, TrendingUp, Percent } from "lucide-react"

export default function ExpensePage() {
  const [totalExpense, setTotalExpense] = useState<number | null>(null)
  const [showSummary, setShowSummary] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  // Use user's actual income or fallback to 20000
  const avgMonthlyIncome = user?.avgMonthlyIncome || 20000

  const handleCalculate = (total: number) => {
    setTotalExpense(total)
    setShowSummary(true)
  }

  const expensePercentage = totalExpense ? (totalExpense / avgMonthlyIncome) * 100 : 0
  const remainingMoney = avgMonthlyIncome - (totalExpense || 0)
  const isNegative = remainingMoney < 0

  const handleBackToHome = () => {
    router.push("/home")
  }

  return (
    <div className="min-h-screen bg-envesto-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={handleBackToHome}
            className="text-envesto-gray-600 hover:text-envesto-navy transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-envesto-navy">Expense Calculator</h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Expense Table */}
          <div className="xl:col-span-2">
            <ExpenseTable onCalculate={handleCalculate} />
          </div>

          {/* Summary Card */}
          <div className="xl:col-span-1">
            {showSummary && totalExpense !== null ? (
              <Card className="sticky top-4 border-envesto-gray-200">
                <CardHeader>
                  <CardTitle className="text-envesto-navy flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Expense Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Total Expense */}
                  <div className="text-center p-4 bg-envesto-gray-50 rounded-lg border border-envesto-gray-100">
                    <p className="text-sm text-envesto-gray-600 mb-1">Total Expense</p>
                    <p className="text-2xl font-bold text-envesto-navy">₹{totalExpense.toFixed(2)}</p>
                  </div>

                  {/* Percentage of Income */}
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2">
                      <Percent className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">% of Monthly Income</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">{expensePercentage.toFixed(1)}%</span>
                  </div>

                  {/* Monthly Income Reference */}
                  <div className="text-center p-3 bg-envesto-gray-100 rounded-lg border border-envesto-gray-200">
                    <p className="text-xs text-envesto-gray-500 mb-1">Your Avg Monthly Income</p>
                    <p className="text-lg font-semibold text-envesto-gray-700">₹{avgMonthlyIncome.toLocaleString()}</p>
                  </div>

                  {/* Remaining Money */}
                  <div
                    className={`text-center p-4 rounded-lg border-2 ${
                      isNegative ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {isNegative ? (
                        <TrendingDown className="h-5 w-5 text-red-600" />
                      ) : (
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      )}
                      <span className={`text-sm font-medium ${isNegative ? "text-red-800" : "text-green-800"}`}>
                        {isNegative ? "Over Budget" : "Remaining Money"}
                      </span>
                    </div>
                    <p className={`text-2xl font-bold ${isNegative ? "text-red-600" : "text-green-600"}`}>
                      {isNegative ? "-" : ""}₹{Math.abs(remainingMoney).toFixed(2)}
                    </p>
                    {isNegative && <p className="text-xs text-red-600 mt-2">You're exceeding your monthly income!</p>}
                  </div>

                  {/* Financial Advice */}
                  <div className="p-4 bg-envesto-teal/10 rounded-lg border border-envesto-teal/20">
                    <h4 className="font-semibold text-envesto-navy mb-2">💡 Financial Tip</h4>
                    <p className="text-sm text-envesto-gray-700 leading-relaxed">
                      {expensePercentage > 80
                        ? "Consider reducing expenses or finding additional income sources."
                        : expensePercentage > 50
                          ? "You're spending a significant portion of your income. Consider budgeting."
                          : "Great job! You're maintaining healthy spending habits."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="sticky top-4 border-envesto-gray-200">
                <CardHeader>
                  <CardTitle className="text-envesto-navy">Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-envesto-gray-500">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="leading-relaxed">
                      Add expense items and click "Calculate Total" to see your summary.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
