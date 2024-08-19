import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function BillingRoute() {
  return(
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle>
            Billing
          </CardTitle>
          <CardDescription>
            Find all details regarding your payments
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  )
}