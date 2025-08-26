"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Phone, Briefcase, MapPin, IndianRupee, X, Clock, Calendar } from "lucide-react"

interface DrawerProfileProps {
  isOpen: boolean
  onClose: () => void
}

export default function DrawerProfile({ isOpen, onClose }: DrawerProfileProps) {
  const { user, userData, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout()
      onClose()
      router.push("/login")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div 
        className={`
          fixed inset-0 
          transition-all duration-300 ease-in-out 
          ${isOpen ? 'visible' : 'invisible'}
        `}
      >
        {/* Backdrop - semi-transparent white */}
        <div 
          className={`
            absolute inset-0 
            bg-white/30 backdrop-blur-sm
            transition-opacity duration-300
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={onClose}
          aria-label="Close profile menu"
        />

        {/* Drawer Panel */}
        <div 
          className={`
            fixed left-0 top-0 bottom-0
            w-80 bg-white shadow-lg
            transform transition-transform duration-300 ease-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            z-50
          `}
        >
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
                  <CardTitle className="text-lg text-envesto-navy">
                    {userData?.name || userData?.displayName || user?.email?.split('@')[0] || "User Profile"}
                  </CardTitle>
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Active Member
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Basic Info Section */}
                  <div className="bg-envesto-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-envesto-navy mb-3 flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Basic Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-envesto-gray-500" />
                          <span className="text-sm text-envesto-gray-600">Email</span>
                        </div>
                        <span className="text-sm font-medium text-envesto-navy">{user?.email || 'Not added'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-envesto-gray-500" />
                          <span className="text-sm text-envesto-gray-600">Phone</span>
                        </div>
                        <span className="text-sm font-medium text-envesto-navy">
                          {userData?.phone || 'Not added'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-envesto-gray-500" />
                          <span className="text-sm text-envesto-gray-600">Location</span>
                        </div>
                        <span className="text-sm font-medium text-envesto-navy">
                          {userData?.state || 'Not added'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Info Section */}
                  <div className="bg-envesto-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-envesto-navy mb-3 flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Professional Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-envesto-gray-600">Occupation</span>
                        <span className="text-sm font-medium text-envesto-navy">
                          {userData?.job || 'Not added'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-envesto-gray-600">Monthly Income</span>
                        <span className="text-sm font-medium text-envesto-teal">
                          {userData?.avgMonthlyIncome 
                            ? `₹${userData.avgMonthlyIncome.toLocaleString()}`
                            : 'Not added'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Account Info Section */}
                  <div className="bg-envesto-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-envesto-navy mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Account Activity
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-envesto-gray-500" />
                          <span className="text-sm text-envesto-gray-600">Member since</span>
                        </div>
                        <span className="text-sm font-medium text-envesto-navy">
                          {userData?.createdAt 
                            ? new Date(userData.createdAt).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })
                            : 'N/A'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-envesto-gray-500" />
                          <span className="text-sm text-envesto-gray-600">Last active</span>
                        </div>
                        <span className="text-sm font-medium text-envesto-navy">
                          {userData?.lastLogin
                            ? new Date(userData.lastLogin).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })
                            : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Edit Profile Button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-envesto-teal text-envesto-teal hover:bg-envesto-teal hover:text-white"
                    onClick={() => console.log('Edit profile clicked')}
                  >
                    Edit Profile
                  </Button>
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
      </div>
    </>
  )
}
