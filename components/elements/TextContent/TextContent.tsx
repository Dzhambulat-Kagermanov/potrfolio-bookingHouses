import ReadMoreBtn from '@/components/ui/Buttons/ReadMoreBtn'
import MainText from '@/components/ui/Text/MainText'
import SecondTitle from '@/components/ui/Title/SecondTitle'
import { Box } from '@mui/material'
import { CSSProperties, FC, ReactElement } from 'react'
interface ITextContent {
  title: string
  text: string
  btnText?: string
  btnHref?: string
  styles?: CSSProperties
  beforeTextChildren?: string | ReactElement
  titleStyles?: CSSProperties
}

const TextContent: FC<ITextContent> = ({
  title,
  text,
  btnText,
  btnHref,
  styles,
  beforeTextChildren,
  titleStyles,
}) => {
  return (
    <Box sx={{ ...styles }}>
      <SecondTitle
        styles={{
          ...titleStyles,
        }}
      >
        {title}
      </SecondTitle>
      {beforeTextChildren || ''}
      <MainText
        styles={{
          width: '100%',
          margin: '50px 0 35px 0',
          padding: { bigMobile: '0', xs: '0 10px 0 0' },
          maxHeight: { lg: 'none', bigMobile: '280px', xs: '240px' },
          overflow: { lg: 'visible', xs: 'auto' },
          '&::-webkit-scrollbar': {
            width: '4px',
            backgroundColor: 'transparent',
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--textDarkGrey)',
            borderRadius: '5px',
          },
          zIndex: '2',
        }}
      >
        {text}
      </MainText>
      {btnText && (
        <ReadMoreBtn href={btnHref ? btnHref : ''}>{btnText}</ReadMoreBtn>
      )}
    </Box>
  )
}

export default TextContent
