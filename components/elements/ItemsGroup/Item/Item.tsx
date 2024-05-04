import { anyKeysObjType } from '@/types/anyKeysObjType'
import { Box } from '@mui/material'
import Image from 'next/image'
import { FC, useCallback, useState } from 'react'
import Content from './Content/Content'

interface IItemGroupItemProps {
  img: string
  text?: string
  itemStyles?: anyKeysObjType
}
const Item: FC<IItemGroupItemProps> = ({ text, img, itemStyles }) => {
  const [activeStyles, setActiveStyles] = useState<anyKeysObjType>({
    opacity: 0,
    zIndex: -1,
  })

  return (
    <Box
      sx={{
        position: 'relative',
        '&:last-child:nth-child(2n + 3)': {
          gridColumn: { tablet: 'auto', xs: '1 / -1' },
        },
        maxHeight: { tablet: 'none', sm: '300px', xs: '250px' },
        ...itemStyles,
      }}
      onMouseOut={useCallback(() => {
        setActiveStyles({
          opacity: 0,
          zIndex: -1,
        })
      }, [])}
      onMouseMove={useCallback(() => {
        setActiveStyles({
          opacity: 0.85,
          zIndex: 2,
        })
      }, [])}
    >
      <Image
        src={img}
        width={0}
        height={0}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        alt='image'
      />
      {text && <Content styles={{ ...activeStyles }}>{text}</Content>}
    </Box>
  )
}

export default Item
