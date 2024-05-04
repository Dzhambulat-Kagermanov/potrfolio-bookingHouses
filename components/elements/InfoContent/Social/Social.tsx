import { homeContactsSocialData } from '@/constants/homeData'
import { Box } from '@mui/material'
import { FC } from 'react'
import Item from './Item/Item'

const Social: FC = () => {
  return (
    <Box
      component='ul'
      sx={{
        display: 'flex',
        columnGap: '45px',
      }}
    >
      {homeContactsSocialData.map(({ id, img, href }) => {
        return <Item href={href} key={id} img={img} />
      })}
    </Box>
  )
}

export default Social
