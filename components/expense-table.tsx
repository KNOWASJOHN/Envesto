"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Plus } from "lucide-react"

interface ExpenseItem {
  id: string
  name: string
  price: string
  quantity: string
}

interface ExpenseTableProps {
  onCalculate: (totalExpense: number) => void
}

export default function ExpenseTable({ onCalculate }: ExpenseTableProps) {
  const [items, setItems] = useState<ExpenseItem[]>([{ id: "1", name: "", price: "", quantity: "1" }])

  const addRow = () => {
    const newItem: ExpenseItem = {
      id: Date.now().toString(),
      name: "",
      price: "",
      quantity: "1",
    }
    setItems([...items, newItem])
  }

  const removeRow = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id))
    }
  }

  const updateItem = (id: string, field: keyof ExpenseItem, value: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  const calculateTotal = () => {
    const total = items.reduce((sum, item) => {
      const price = Number.parseFloat(item.price) || 0
      const quantity = Number.parseInt(item.quantity) || 0
      return sum + price * quantity
    }, 0)

    onCalculate(total)
  }

  const getItemTotal = (item: ExpenseItem) => {
    const price = Number.parseFloat(item.price) || 0
    const quantity = Number.parseInt(item.quantity) || 0
    return price * quantity
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-envesto-navy">Expense Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 font-medium text-envesto-gray-700 text-sm">
            <div className="col-span-4">Product Name</div>
            <div className="col-span-3">Price (₹)</div>
            <div className="col-span-2">Quantity</div>
            <div className="col-span-2">Total (₹)</div>
            <div className="col-span-1">Action</div>
          </div>

          {/* Table Rows */}
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-4">
                <Input
                  placeholder="Enter product name"
                  value={item.name}
                  onChange={(e) => updateItem(item.id, "name", e.target.value)}
                />
              </div>
              <div className="col-span-3">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={item.price}
                  onChange={(e) => updateItem(item.id, "price", e.target.value)}
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="col-span-2">
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(item.id, "quantity", e.target.value)}
                  min="1"
                />
              </div>
              <div className="col-span-2">
                <div className="px-3 py-2 bg-envesto-gray-50 rounded text-sm font-medium">
                  ₹{getItemTotal(item).toFixed(2)}
                </div>
              </div>
              <div className="col-span-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeRow(item.id)}
                  disabled={items.length === 1}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button
              onClick={addRow}
              variant="outline"
              className="border-envesto-teal text-envesto-teal hover:bg-envesto-teal hover:text-white bg-transparent"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Row
            </Button>
            <Button onClick={calculateTotal} className="bg-envesto-teal hover:bg-envesto-teal/90 text-white">
              Calculate Total
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
