import TextContent from '@/components/elements/TextContent/TextContent'
import MapElem from '@/components/modules/Map/Map'
import useLang from '@/hooks/useLang'
import { Box } from '@mui/material'
import { FC } from 'react'

const Map: FC = () => {
  const lang = useLang()
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'var(--primaryLightGrey)',
        flexFlow: { tablet: 'nowrap row', xs: 'wrap column-reverse' },
      }}
      className={'--parentBlock'}
    >
      <MapElem
        styles={{ width: { tablet: '50%', xs: '100%' } }}
        coordinates={[56.668212, 10.029416]}
      />
      <TextContent
        styles={{
          width: { tablet: '50%', xs: '100%' },
          padding: { lg: '100px', xs: '40px' },
        }}
        title={lang.homePage.map.content.title}
        text={lang.homePage.info.content.text}
        btnText={lang.homePage.info.content.button}
        btnHref='/info/forest'
      />
    </Box>
  )
}

export default Map
