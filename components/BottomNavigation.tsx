import React from 'react'
import Link from 'next/link'
import { Home, Hand, Mic, User, Settings, Laugh } from 'lucide-react'

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto flex justify-around items-center h-20 px-4">
        <Link
          href="/"
          className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-gray-100 transition-colors"
          title="Home"
        >
          <Home className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600 mt-1">Home</span>
        </Link>

        <Link
          href="/sign"
          className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-gray-100 transition-colors"
          title="Sign"
        >
          <Hand className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600 mt-1">Sign</span>
        </Link>

        <Link
          href="/voice"
          className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-gray-100 transition-colors"
          title="Voice"
        >
          <Mic className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600 mt-1">Voice</span>
        </Link>

        <Link
          href="/jokes"
          className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-gray-100 transition-colors"
          title="Jokes"
        >
          <Laugh className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600 mt-1">Jokes</span>
        </Link>

        <Link
          href="/settings"
          className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-gray-100 transition-colors"
          title="Settings"
        >
          <Settings className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600 mt-1">Settings</span>
        </Link>
      </div>
    </nav>
  )
}
