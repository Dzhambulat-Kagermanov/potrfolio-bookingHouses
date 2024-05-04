import MainText from '@/components/ui/Text/MainText'
import { IDefaultProps } from '@/types/defaultProps'
import { Box } from '@mui/material'
import { FC } from 'react'

interface IBookingPriceContentItemProps extends IDefaultProps {
  price: string
}

const Item: FC<IBookingPriceContentItemProps> = ({
  children,
  price,
  styles,
}) => {
  return (
    <Box
      component='li'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <MainText styles={{ fontFamily: 'OpenSansR', ...styles }}>
        {children}
      </MainText>
      <MainText styles={{ fontFamily: 'OpenSansR', ...styles }}>
        {price}
      </MainText>
    </Box>
  )
}

export default Item
