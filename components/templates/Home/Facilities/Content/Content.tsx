import { anyKeysObjType } from '@/types/anyKeysObjType'
import { Box } from '@mui/material'
import { FC } from 'react'
import { IFacilitiesInnerProps } from '../Facilities'
import Item from './Item/Item'

interface IFacilitiesGroupProps {
  itemsData: IFacilitiesInnerProps[]
  styles?: anyKeysObjType
}
const Content: FC<IFacilitiesGroupProps> = ({ itemsData, styles }) => {
  return (
    <Box
      component='ul'
      sx={{
        maxWidth: '850px',
        display: 'grid',
        gridTemplateColumns: {
          md: 'repeat(4, 1fr)',
          sm: 'repeat(3, 1fr)',
          xs: 'repeat(2, 1fr)',
        },
        gap: { mediumMobile: '65px', xs: '40px' },
        ...styles,
      }}
    >
      {itemsData.map(({ img, title, id }) => {
        return <Item key={id} img={img} title={title} />
      })}
    </Box>
  )
}

export default Content
