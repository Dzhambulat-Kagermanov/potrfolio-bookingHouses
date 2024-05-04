import SecondText from '@/components/ui/Text/SecondText'
import { Box } from '@mui/material'
import { CSSProperties, FC } from 'react'

interface IBookingGroupProps {
  data: string[]
  styles?: CSSProperties
}

const Group: FC<IBookingGroupProps> = ({ data, styles }) => {
  return (
    <Box
      component='ul'
      sx={{
        margin: '25px 0 0 0',
        display: 'flex',
        flexFlow: 'wrap column',
        rowGap: '15px',
        ...styles,
      }}
    >
      {data.map((el, index) => {
        return (
          <Box component='li' key={index}>
            <SecondText>{el}</SecondText>
          </Box>
        )
      })}
    </Box>
  )
}

export default Group
