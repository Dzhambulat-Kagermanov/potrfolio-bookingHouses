import MainText from '@/components/ui/Text/MainText'
import { IDefaultProps } from '@/types/defaultProps'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ILocationLinkProps extends IDefaultProps {
  href: string
  linkStyles?: CSSProperties
}

const LocationLink: FC<ILocationLinkProps> = ({ href, children, styles }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        columnGap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        ...styles,
      }}
    >
      <Image
        src='/images/Area/Head/location.svg'
        width={0}
        height={0}
        style={{ width: '10px', height: '15px' }}
        alt='location icon'
      />
      <Link href={href}>
        <MainText
          styles={{
            color: 'white',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            textDecorationThickness: '1px',
          }}
        >
          {children}
        </MainText>
      </Link>
    </Box>
  )
}

export default LocationLink
