import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import prisma from '../lib/db'

import { Button } from '@/components/ui/button';
import { CreateStripeAccountLink } from '../actions';

async function getData(userId: string){
  const data = await prisma.product.findUnique({
    where: {
      id: userId,
    },
    select: {
      stripeConnectedLinked: true,
    }
  });

  return data;
}

export default async function BillingRoute() {
  const { getUser } = getKindeServerSession()

  const user = await getUser()

  if (!user) {
    throw new Error('Unauthorized!')
  }

  const data = await getData(user.id);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Billing</CardTitle>
          <CardDescription>
            Find all details regarding your payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          {data?.stripeConnectedLinked === false && (
            <form action={CreateStripeAccountLink}>
              <Button type="submit">
                Link you account to Stripe
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
