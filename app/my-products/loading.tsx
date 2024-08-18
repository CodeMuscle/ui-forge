import { Skeleton } from '@/components/ui/skeleton'
import { LoadingProductCard } from '../components/ProductCard'

export default function LoadingFile() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 mt-4 gap-10">
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
      </div>
    </section>
  )
}
