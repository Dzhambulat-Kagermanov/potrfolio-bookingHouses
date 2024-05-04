import MainTitle from '@/components/ui/Title/MainTitle'
import { IDefaultProps } from '@/types/defaultProps'
import { Box, Container } from '@mui/material'
import { CSSProperties, FC } from 'react'

interface IHeadProps extends IDefaultProps {
  title: string
  background: string
  titleStyles?: CSSProperties
}

const Head: FC<IHeadProps> = ({
  title,
  children,
  styles,
  background,
  titleStyles,
}) => {
  return (
    <Box
      className='--parentBlock'
      sx={{
        backgroundImage: `url("${background}")`,
        backgroundSize: 'cover',
        padding: '70px 0',
        minHeight: { mediumMobile: '350px', xs: '250px' },
        boxSizing: 'content-box',
        backgroundColor: 'var(--textDarkGrey)',
        backgroundPosition: '40% center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.45)',
        },
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexFlow: 'wrap column',
          alignItems: 'center',
          ...styles,
        }}
      >
        <MainTitle
          styles={{ color: 'white', letterSpacing: '3.3px', ...titleStyles }}
        >
          {title}
        </MainTitle>
        {children}
      </Container>
    </Box>
  )
}

export default Head
