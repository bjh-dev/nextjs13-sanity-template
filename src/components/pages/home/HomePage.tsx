import ScrollUp from '@/components/ScollUp'
import BoxedTextWithImages from '@/components/sections/BoxedTextWithImages'
import CenteredText from '@/components/sections/CenteredText'
import Form from '@/components/sections/Form'
import Steps from '@/components/sections/Steps'
import TextWithVideo from '@/components/sections/TextWithVideo'
import PageHeader from '@/components/ui/PageHeader'
import { HomePagePayload } from '@/lib/types'

export interface HomePageProps {
  data: HomePagePayload
}

function HomePage({ data }: HomePageProps) {
  // console.log(data)

  return (
    <>
      <PageHeader {...data.pageHeader} />
      <section className="sections flex flex-col">
        {data?.pageContent?.map((s) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let el: any = null
          switch (s._type) {
            case 'centeredText':
              el = <CenteredText key={s._key} {...s} />
              break
            case 'boxedTextWithImages':
              el = <BoxedTextWithImages key={s._key} {...s} />
              break
            case 'textWithVideo':
              el = <TextWithVideo key={s._key} {...s} />
              break
            case 'steps':
              el = <Steps key={s._key} {...s} />
              break
            case 'formSection':
              el = <Form key={s._key} {...s} />
              break
            default:
              el = null
          }
          return el
        })}
      </section>
      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </>
  )
}

export default HomePage
