import Link from 'next/link'
import React from 'react'
import NavbarLinks from './NavbarLinks'
import { Button } from '@/components/ui/button'
import MobileMenu from './MobileMenu'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'

const Navbar = () => {
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
      <div className="md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            UI<span className="text-primary">Forge</span>
          </h1>
        </Link>
      </div>

      <NavbarLinks />

      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        <Button asChild>
          <LoginLink>
            Login
          </LoginLink>
        </Button>
        <Button asChild variant="secondary">
          <RegisterLink>
            Register
          </RegisterLink>
        </Button>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar