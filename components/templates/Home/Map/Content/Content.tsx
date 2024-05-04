import ReadMoreBtn from '@/components/ui/Buttons/ReadMoreBtn'
import MainText from '@/components/ui/Text/MainText'
import MainTitle from '@/components/ui/Title/MainTitle'
import useLang from '@/hooks/useLang'
import { anyKeysObjType } from '@/types/anyKeysObjType'
import { Box } from '@mui/material'
import { FC } from 'react'

const Content: FC<{ styles?: anyKeysObjType }> = ({ styles }) => {
  const lang = useLang()
  return (
    <Box sx={{ ...styles }}>
      <MainTitle>{lang.homePage.map.content.title}</MainTitle>
      <MainText>{lang.homePage.info.content.text}</MainText>
      <ReadMoreBtn href='/forest/info'>
        {lang.homePage.info.content.button}
      </ReadMoreBtn>
    </Box>
  )
}

export default Content
