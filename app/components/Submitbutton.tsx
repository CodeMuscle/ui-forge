'use client'

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

function Submitbutton({ title }: { title: string }) {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button>{title}</Button>
      )}
    </>
  )
}

export { Submitbutton }

export function BuyButton({ price }: { price: number }) {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled size="lg" className="mt-10 w-full">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit" size="lg" className="w-full mt-10">
          Buy for ${price}
        </Button>
      )}
    </>
  )
}
