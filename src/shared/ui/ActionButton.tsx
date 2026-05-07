import { ChevronRight } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function ActionButton({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ActionButtonProps) {
  return (
    <button className={`action-button action-button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      <span className="action-button__icon" aria-hidden="true">
        <ChevronRight size={24} strokeWidth={3} />
      </span>
    </button>
  )
}
