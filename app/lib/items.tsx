import { ChefHat, Globe, PartyPopper } from 'lucide-react'
import { ReactNode } from 'react'

interface IAppProps {
  name: string
  title: string
  image: ReactNode
  id: number
}

export const categoryItems: IAppProps[] = [
  {
    id: 0,
    name: 'template',
    title: 'Template',
    image: <Globe />
  },
  {
    id: 1,
    name: 'uikit',
    title: 'UI Kit',
    image: <ChefHat />
  },
  {
    id: 2,
    name: 'icon',
    title: 'Icon',
    image: <PartyPopper />
  },
]
