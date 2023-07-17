import { Navigation } from '@/components/navigation'

export default function Layout ({
  children // will be a page or nested layout
}) {
  return (
    <section>
      <nav>
        <Navigation
          navLinks={[
            { href: '/', name: 'dashboard' },            
            { href: '/pay', name: 'pay' },
            { href: '/settings', name: 'settings' }
          ]}
        />
      </nav>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  )
}
