import { anyKeysObjType } from '@/types/anyKeysObjType'
import { Box } from '@mui/material'
import { FC } from 'react'
import Item from './Item/Item'

interface IItemGroupPropsValue {
  id: number
  img: string
  text?: string
}
interface IItemsGroupProps {
  items: IItemGroupPropsValue[]
  containerStyles?: anyKeysObjType
  itemStyles?: anyKeysObjType
}
const ItemsGroup: FC<IItemsGroupProps> = ({
  items,
  containerStyles,
  itemStyles,
}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '24px',
        margin: '0 auto 150px auto',
        gridTemplateColumns: {
          tablet: 'repeat(3, 1fr)',
          bigMobile: 'repeat(2, 1fr)',
          xs: '1fr',
        },
        ...containerStyles,
      }}
    >
      {items.map(({ id, img, text }) => {
        return <Item key={id} img={img} text={text} itemStyles={itemStyles} />
      })}
    </Box>
  )
}

export default ItemsGroup
