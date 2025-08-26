"use client"

import { useState } from "react"
import { ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import DrawerProfile from "./drawer-profile"

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const router = useRouter()

  const handleCartClick = () => {
    router.push("/expense")
  }

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-sm border-b border-envesto-gray-100">
        {/* Profile Icon - Left */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDrawerOpen(true)}
          className="rounded-full w-10 h-10 bg-envesto-gray-100 hover:bg-envesto-gray-200 transition-colors"
          aria-label="Open profile menu"
        >
          <User className="h-5 w-5 text-envesto-gray-600" />
        </Button>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-lg font-bold text-envesto-navy">EnVesto</h1>
        </div>

        {/* Cart Icon - Right */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCartClick}
          className="rounded-full w-10 h-10 bg-envesto-gray-100 hover:bg-envesto-gray-200 transition-colors"
          aria-label="Go to expense calculator"
        >
          <ShoppingCart className="h-5 w-5 text-envesto-gray-600" />
        </Button>
      </header>

      {/* Profile Drawer */}
      <DrawerProfile isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}
