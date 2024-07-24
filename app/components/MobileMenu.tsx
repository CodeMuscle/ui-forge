'use client'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { navbarLinks } from "./NavbarLinks"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


function MobileMenu() {

  const location = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-6 flex px-2 space-y-2 flex-col">
          {navbarLinks.map((item) => (
            <Link className={cn(
              location === item.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75', 'group flex items-center p-2 font-medium rounded-md')}  href={item.href} key={item.id}>
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu