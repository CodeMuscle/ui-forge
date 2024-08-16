import { LoadingProductCard } from "@/app/components/ProductCard";

export default function LoadingFile(){
  return(
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
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