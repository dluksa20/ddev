// import { ThemeSwitcher } from '@/components/ThemeSwitcher'
'use client'
import React from 'react'
import Button from '@/components/ui/Button'
import { useTheme } from 'next-themes';

const page = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
    </>
  )
}

export default page
