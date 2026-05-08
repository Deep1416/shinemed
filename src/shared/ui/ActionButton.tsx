import { ChevronRight } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  to?: string
}

export function ActionButton({
  children,
  className = '',
  variant = 'primary',
  to,
  ...props
}: ActionButtonProps) {
  const inner = (
    <>
      <span>{children}</span>
      <span className="action-button__icon" aria-hidden="true">
        <ChevronRight size={24} strokeWidth={3} />
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`action-button action-button--${variant} ${className}`}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={`action-button action-button--${variant} ${className}`} {...props}>
      {inner}
    </button>
  )
}
