import MainText from '@/components/ui/Text/MainText'
import SecondTitle from '@/components/ui/Title/SecondTitle'
import { Box } from '@mui/material'
import { CSSProperties, FC } from 'react'
import Social from './Social/Social'

interface IInfoContentProps {
  title: string
  location: string
  phone: string
  mail: string
  styles?: CSSProperties
}

const InfoContent: FC<IInfoContentProps> = ({
  title,
  location,
  phone,
  mail,
  styles,
}) => {
  return (
    <Box sx={{ maxWidth: '385px', ...styles }}>
      <SecondTitle styles={{ fontSize: { smallMobile: '40px', xs: '35px' } }}>
        {title}
      </SecondTitle>
      <MainText styles={{ margin: '50px 0 20px 0' }}>{location}</MainText>
      <Box sx={{ margin: '0 0 50px 0' }}>
        <MainText>{phone}</MainText>
        <MainText>{mail}</MainText>
      </Box>
      <Social />
    </Box>
  )
}

export default InfoContent
