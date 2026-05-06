import { Mail, PhoneCall } from 'lucide-react'

const tickerItems = [
  { icon: Mail, label: 'Email: hello@reliacare.com' },
  { icon: PhoneCall, label: 'Call Us: +2389 0045 8873' },
  { icon: Mail, label: 'Email: hello@reliacare.com' },
  { icon: PhoneCall, label: 'Call Us: +2389 0045 8873' },
]

export function ContactTicker() {
  return (
    <section className="contact-ticker" aria-label="Contact information">
      <div className="contact-ticker__track">
        {tickerItems.map((item, index) => {
          const Icon = item.icon

          return (
            <div className="contact-ticker__item" key={`${item.label}-${index}`}>
              <Icon size={34} strokeWidth={2.4} aria-hidden="true" />
              <span>{item.label}</span>
              <span className="contact-ticker__flower" aria-hidden="true" />
            </div>
          )
        })}
      </div>
    </section>
  )
}
