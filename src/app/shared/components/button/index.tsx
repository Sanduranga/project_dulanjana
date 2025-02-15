import React from 'react'
import clsx from 'clsx'

const variants = {
  primary:
    'bg-amber-400 border-2 border-primary-400 text-white rounded-xl font-semibold hover:bg-primary-600 hover:border-primary-600 transition duration-300 flex justify-center items-center',
  secondary:
    'font-bold flex justify-center items-center inline-flex bg-secondary-600 text-white data-[active]:bg-secondary-600',
  outlined:
    'text-primary-400 border-4 border-amber-400 rounded-xl font-bold hover:text-primary-600 hover:border-primary-600 transition duration-300 flex items-center justify-center',
  primaryS:
    'flex justify-center items-center inline-flex md:rounded-lg rounded-md bg-primary-400 font-bold text-white data-[hover]:bg-primary-600 data-[active]:bg-primary-600',
  outlinedS:
    'flex justify-center items-center inline-flex md:rounded-lg rounded-md bg-white border-2 font-bold text-primary-600 border-amber-400 data-[active]:border-2',
}

const sizes = {
  sm: 'lg:px-8 md:px-6 px-4 lg:h-[52px] md:h-[46px] h-[36px] sm:text-base text-sm',
  xs: 'px-4 md:h-[36px] h-[28px] sm:text-base text-sm',
  xxs: 'md:px-4 px-3 md:h-[52px] h-[36px] sm:text-base text-sm',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'sm', className, children, ...props }) => {
  return (
    <button className={clsx(variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

export default Button
