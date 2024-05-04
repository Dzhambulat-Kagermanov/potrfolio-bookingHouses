import Head from '@/components/modules/Head/Head'
import LocationLink from '@/components/ui/Links/LocationLink'
import useLang from '@/hooks/useLang'
import { FC } from 'react'

const HeadElem: FC = () => {
  const lang = useLang()
  return (
    <Head
      title={lang.booking.head.title}
      background='/images/Booking/Head/backgroundImg.png'
    >
      <LocationLink
        styles={{ margin: '15px 0 0 0' }}
        href='https://www.google.com/maps/place/4953+Vesterborg,+%D0%94%D0%B0%D0%BD%D0%B8%D1%8F/@54.8676129,11.2662751,13z/data=!3m1!4b1!4m6!3m5!1s0x47ad568afb8a7b8b:0x2b0ef19488050ea5!8m2!3d54.856686!4d11.271945!16s%2Fg%2F1jmcrb3bp?hl=ru&entry=ttu'
      >
        {lang.area.head.content.link}
      </LocationLink>
    </Head>
  )
}

export default HeadElem
