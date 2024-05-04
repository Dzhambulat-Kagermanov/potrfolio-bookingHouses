import Head from '@/components/modules/Head/Head'
import useLang from '@/hooks/useLang'
import { FC } from 'react'
import Content from './Content/Content'

const HeadElem: FC = () => {
  const lang = useLang()
  return (
    <Head
      title={lang.area.head.title}
      background='/images/Area/Head/backgroundImg.png'
    >
      <Content />
    </Head>
  )
}

export default HeadElem
