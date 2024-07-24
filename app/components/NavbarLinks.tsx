'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "Templates",
    href: "#",
  },
  {
    id: 2,
    name: "UI & Kits",
    href: "#",
  },
  {
    id: 3,
    name: "Icons",
    href: "#",
  },
]

const NavbarLinks = () => {

  const location = usePathname();

  return (
    <div className="hidden md:flex flex-row justify-center items-center col-span-6 gap-x-2">
      {navbarLinks.map((link) => (
        <Link key={link.id} href={link.href} className={cn(
          location === link.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75', 'group flex items-center p-2 font-medium rounded-md' 
        )}> 
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default NavbarLinks