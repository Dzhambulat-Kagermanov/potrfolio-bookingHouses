import useLang from '@/hooks/useLang'
import { Box } from '@mui/material'
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
} from '@pbe/react-yandex-maps'
import { CSSProperties, FC } from 'react'
import './Map.scss'

interface IMapProps {
  coordinates: number[]
  styles?: CSSProperties
  classNames?: string
}
const MapElem: FC<IMapProps> = ({ coordinates, styles, classNames }) => {
  const lang = useLang()

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '450px',
        backgroundColor: 'var(--textDarkGrey)',
        position: 'relative',
        '&::before': {
          content: `'${lang.homePage.map.preloaderText}'`,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'OpenSansR',
          fontSize: '24px',
          color: 'white',
        },
        ...styles,
      }}
      className={`map-element ${classNames || ''}`}
    >
      <YMaps>
        <Map
          style={{ height: '100%', minHeight: 'inherit' }}
          defaultState={{ center: [coordinates[0], coordinates[1]], zoom: 14 }}
        >
          <Placemark
            defaultGeometry={[coordinates[0], coordinates[1]]}
            options={{
              openHintOnHover: true,
              iconLayout: 'default#image',
              iconImageHref: '/images/Shared/mapLabel.svg',
              iconImageSize: [150, 150],
              iconImageOffset: [-3, -42],
            }}
          />
          <TypeSelector />
          <GeolocationControl />
          <FullscreenControl />
        </Map>
      </YMaps>
    </Box>
  )
}

export default MapElem
