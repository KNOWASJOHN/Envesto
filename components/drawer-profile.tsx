"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Phone, Briefcase, MapPin, IndianRupee, X } from "lucide-react"

interface DrawerProfileProps {
  isOpen: boolean
  onClose: () => void
}

export default function DrawerProfile({ isOpen, onClose }: DrawerProfileProps) {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    console.log("User logged out from drawer")
    logout()
    onClose()
    router.push("/login")
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-label="Close profile menu"
      />

      {/* Drawer */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-envesto-gray-100">
            <h2 className="text-xl font-bold text-envesto-navy">Profile</h2>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close profile">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Profile Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            <Card className="border-envesto-gray-100">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-envesto-teal rounded-full flex items-center justify-center mx-auto mb-2">
                  <User className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-envesto-navy">{user?.name || "User Profile"}</CardTitle>
                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  Active Member
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {user?.email && (
                  <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-envesto-gray-50">
                    <Mail className="h-4 w-4 text-envesto-gray-500" />
                    <span className="text-envesto-gray-700">{user.email}</span>
                  </div>
                )}

                {user?.phone && (
                  <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-envesto-gray-50">
                    <Phone className="h-4 w-4 text-envesto-gray-500" />
                    <span className="text-envesto-gray-700">{user.phone}</span>
                  </div>
                )}

                {user?.job && (
                  <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-envesto-gray-50">
                    <Briefcase className="h-4 w-4 text-envesto-gray-500" />
                    <span className="text-envesto-gray-700">{user.job}</span>
                  </div>
                )}

                {user?.state && (
                  <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-envesto-gray-50">
                    <MapPin className="h-4 w-4 text-envesto-gray-500" />
                    <span className="text-envesto-gray-700">{user.state}</span>
                  </div>
                )}

                {user?.avgMonthlyIncome && (
                  <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-envesto-teal/10 border border-envesto-teal/20">
                    <IndianRupee className="h-4 w-4 text-envesto-teal" />
                    <span className="text-envesto-gray-700 font-medium">
                      ₹{user.avgMonthlyIncome.toLocaleString()}/month
                    </span>
                  </div>
                )}

                {user?.age && (
                  <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-envesto-gray-50">
                    <User className="h-4 w-4 text-envesto-gray-500" />
                    <span className="text-envesto-gray-700">{user.age} years old</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Logout Button */}
          <div className="p-4 border-t border-envesto-gray-100">
            <Button onClick={handleLogout} variant="destructive" className="w-full">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
