import React from 'react'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'strong'

export const Typography: React.FC<{
  variant?: Variant
  children: React.ReactNode
  className?: string
}> = ({ variant, children, className }) => {
  if (variant) {
    const Tag = variant
    return <Tag className={className}>{children}</Tag>
  } else return <p className={className || 'body'}>{children}</p>
}
