import { Card } from '@/components/ui/card'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function SellForm() {

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user){
    throw new Error('Unauthorized');
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <SellForm />
      </Card>
    </section>
  )
}
