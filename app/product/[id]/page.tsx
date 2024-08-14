import prisma from '@/app/lib/db'
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { CarouselContent } from '@/components/ui/carousel'
import Image from 'next/image'

async function getData(id: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: id
    },
    select: {
      category: true,
      description: true,
      smallDescription: true,
      name: true,
      images: true,
      price: true,
      User: {
        select: {
          profileImage: true,
          firstName: true
        }
      }
    }
  })

  return data
}

export default async function ProductPage({
  params
}: {
  params: { id: string }
}) {
  const data = await getData(params.id)
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16 lg:mt-12">
      <Carousel className="lg:row-end-1 lg:col-span-4">
        <CarouselContent>
          {data?.images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                <Image
                  alt="Product Image"
                  src={item as string}
                  fill
                  className="object-cover w-full rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>

      <div className="max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">{data?.name}</h1>
        <p className="">{data?.smallDescription}</p>

      </div>
    </section>
  )
}
