import Head from '@/components/modules/Head/Head'
import HeadButton from '@/components/ui/Buttons/HeadButton'
import useLang from '@/hooks/useLang'
import Link from 'next/link'
import { FC } from 'react'
import Content from './Content/Content'

const HeadElem: FC = () => {
  const lang = useLang()
  return (
    <Head
      background='/images/About/Head/backgroundImg.png'
      title={lang.about.head.title}
    >
      <Content
        styles={{
          margin: '90px 0 0 0',
          flexFlow: { sm: 'nowrap row', xs: 'wrap column' },
        }}
      >
        <HeadButton>{lang.about.head.content.btn1}</HeadButton>
        <HeadButton>
          <Link href='/faq'>{lang.about.head.content.btn2}</Link>
        </HeadButton>
      </Content>
    </Head>
  )
}

export default HeadElem
