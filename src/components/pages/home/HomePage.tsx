import { LuMail } from 'react-icons/lu'

import ScrollUp from '@/components/ScollUp'
import { Button } from '@/components/ui/button'
import { HomePagePayload } from '@/lib/types'

export interface HomePageProps {
  data: HomePagePayload
}

function HomePage({ data }: HomePageProps) {
  const { title } = data

  return (
    <>
      <h1 className="text-3xl">{title}</h1>
      <Button className="mt-4">
        <LuMail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </>
  )
}

export default HomePage
