import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export default async function BillingRoute() {
  const { getUser } = getKindeServerSession()

  const user = await getUser()

  if (!user) {
    throw new Error('Unauthorized!')
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Billing</CardTitle>
          <CardDescription>
            Find all details regarding your payments
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  )
}
