import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  className?: string
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  onClick,
  className = '' 
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center'
  
  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

