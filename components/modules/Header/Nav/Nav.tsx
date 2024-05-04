import Item from '@/components/elements/LinkItem/LinkItem'
import useLang from '@/hooks/useLang'
import { buttonEventType } from '@/types/buttonEventType'
import { Box } from '@mui/material'
import { CSSProperties, FC } from 'react'
import LangsMenu from '../LangsMenu/LangsMenu'

export interface ILangStyles {
  langStyles?: {
    formStyles?: CSSProperties
    labelStyles?: CSSProperties
  }
}

interface INavProps extends ILangStyles {
  styles?: CSSProperties
  itemStyles?: CSSProperties
  linksClick?: buttonEventType
}

const Nav: FC<INavProps> = ({ styles, itemStyles, langStyles, linksClick }) => {
  const lang = useLang()
  const langsMenuData = [
    {
      lang: 'RU',
      img: '/images/Header/russianLang.svg',
    },
    {
      lang: 'EN',
      img: '/images/Header/englandLang.svg',
    },
  ]

  return (
    <Box component='nav'>
      <Box
        component='ul'
        sx={{
          display: { md: 'flex', xs: 'none' },
          alignItems: 'center',
          columnGap: '20px',
          ...styles,
        }}
      >
        <Item onClick={linksClick} styles={{ ...itemStyles }} href='/'>
          {lang.header.nav.home}
        </Item>
        <Item onClick={linksClick} styles={{ ...itemStyles }} href='/hut'>
          {lang.header.nav.hut}
        </Item>
        <Item onClick={linksClick} styles={{ ...itemStyles }} href='/area'>
          {lang.header.nav.area}
        </Item>
        <Item onClick={linksClick} styles={{ ...itemStyles }} href='/booking'>
          {lang.header.nav.booking}
        </Item>
        <Item onClick={linksClick} styles={{ ...itemStyles }} href='/about'>
          {lang.header.nav.about}
        </Item>
        <Item onClick={linksClick} styles={{ ...itemStyles }} href='/faq'>
          {lang.header.nav.faq}
        </Item>
        <LangsMenu langStyles={langStyles} langsData={langsMenuData} />
      </Box>
    </Box>
  )
}

export default Nav
