'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Volume2, Hand } from 'lucide-react'
import BottomNavigation from '@/components/BottomNavigation'
import AvatarDisplay from '@/components/AvatarDisplay'

interface Message {
  id: number
  type: 'sign' | 'voice'
  content: string
  transcription?: string
  avatar?: string
  timestamp: Date
  sender: 'user' | 'other'
}

export default function Conversation() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'sign',
      content: 'Hello',
      transcription: 'Hello',
      sender: 'user',
      timestamp: new Date(Date.now() - 30000),
    },
    {
      id: 2,
      type: 'voice',
      content: 'Hi there! How are you?',
      transcription: 'Hi there! How are you?',
      avatar: 'Signer',
      sender: 'other',
      timestamp: new Date(Date.now() - 20000),
    },
    {
      id: 3,
      type: 'sign',
      content: 'I am good',
      transcription: 'I am good',
      sender: 'user',
      timestamp: new Date(Date.now() - 10000),
    },
  ])

  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        type: 'sign',
        content: input,
        transcription: input,
        sender: 'user',
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setInput('')
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-200 p-4"
        >
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-600" />
            Live Conversation
          </h1>
          <p className="text-sm text-gray-600">Real-time communication</p>
        </motion.div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((message, idx) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'other' && (
                <div className="mr-3">
                  <AvatarDisplay name={message.avatar || 'Signer'} size="sm" />
                </div>
              )}

              <div
                className={`max-w-xs ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-3xl rounded-tr-lg'
                    : 'bg-gray-100 text-gray-900 rounded-3xl rounded-tl-lg'
                } p-4 shadow-soft`}
              >
                {message.type === 'sign' && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Hand className="w-4 h-4" />
                      <span className="text-xs font-semibold opacity-75">
                        {message.sender === 'user' ? 'Your Sign' : 'Their Sign'}
                      </span>
                    </div>
                    <p className="font-semibold text-lg mb-2">{message.content}</p>
                    <p className="text-sm opacity-90">→ "{message.transcription}"</p>
                  </div>
                )}

                {message.type === 'voice' && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Volume2 className="w-4 h-4" />
                      <span className="text-xs font-semibold opacity-75">
                        {message.sender === 'user' ? 'Your Voice' : 'Their Voice'}
                      </span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                )}

                <p className="text-xs opacity-50 mt-2">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:border-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className="px-4 py-3 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-soft hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}
