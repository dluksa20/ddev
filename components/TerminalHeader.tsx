'use client'

import React, { useState, useEffect } from 'react'

const TerminalHeader = () => {
  const [time, setTime] = useState('')
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="flex items-center justify-between px-5 py-3 bg-surface-elevated border-b border-accent/10 z-10 shrink-0">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner" />
      </div>

      <div className="hidden md:block text-[11px] uppercase tracking-[0.2em] text-accent/60 font-bold">
        ddev — zsh — {dimensions.width}×{dimensions.height}
      </div>

      <div className="text-[11px] text-accent/90 md:w-12 text-right">
        {time}
      </div>
    </div>
  )
}

export default TerminalHeader
