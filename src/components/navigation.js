'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import * as styles from './navigation.css.js'
// import { useRouter } from 'next/navigation'

export function Navigation ({ navLinks }) {
  // const router = useRouter()
  const pathname = usePathname()

  return (
    <ul style={{display: 'flex', listStyle: 'none'}}>
      {navLinks.map(link => {
        const isActive = pathname === link.href

        return (
          <li key={link.name} className={styles.listItem}>
            {/* <button type='button' onClick={() => router.push(`${link.href}`)}>
              {link.name}
            </button> */}
            <Link
              className={isActive ? styles.activeLink : styles.link}
              // style={isActive ? { color: 'blue' } : { color: 'white' }}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
