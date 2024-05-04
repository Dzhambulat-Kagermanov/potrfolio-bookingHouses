import { anyKeysObjType } from '@/types/anyKeysObjType'
import Image from 'next/image'
import { FC } from 'react'
import Content from '../Content/Content'

interface SliderItemProps {
  img: string
  styles?: anyKeysObjType
  title: string
  subtitle: string
}

const Item: FC<SliderItemProps> = ({ img, styles, title, subtitle }) => {
  return (
    <>
      <Content title={title} subtitle={subtitle} />
      <Image
        src={img}
        width={0}
        height={0}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '20% 30%',
          opacity: '0.65',
          ...styles,
        }}
        alt='house'
      />
    </>
  )
}

export default Item
