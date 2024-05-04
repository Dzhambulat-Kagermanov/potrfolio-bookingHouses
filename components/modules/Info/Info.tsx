import { Box, Container } from '@mui/material'
import { CSSProperties, FC, ReactElement } from 'react'
import Content from './Content/Content'
import Slider from './Slider/Slider'

export interface IInfoSliderId {
  sliderId: string
}
export interface IInfoSliderImg extends IInfoSliderId {
  sliderImages: { img: string; id?: number; type?: string }[]
}
export interface IInfoContentBreakpoints {
  breakpoints?: { link: string; imgId: number }[]
}
export interface IInfoContentBeforeText {
  contentTextBefore?: string | ReactElement
}
export interface IInfoContent extends IInfoContentBreakpoints {
  title: string
  text: string
}
interface IInfoProps
  extends IInfoSliderImg,
    IInfoContent,
    IInfoContentBeforeText {
  direction?: 'reverse'
  sliderId: string
  titleStyles?: CSSProperties
}

const Info: FC<IInfoProps> = ({
  title,
  text,
  breakpoints,
  sliderImages,
  direction,
  sliderId,
  contentTextBefore,
  titleStyles,
}) => {
  const lowerSliderId = sliderId.toLowerCase()
  return (
    <Box className='--parentBlock'>
      <Container
        fixed
        sx={{
          display: 'flex',
          flexDirection: ` ${direction ? 'row-reverse' : 'row'}`,
          justifyContent: 'space-between',
          flexFlow: {
            tablet: `nowrap ${direction ? 'row-reverse' : 'row'}`,
            xs: 'wrap column-reverse',
          },
        }}
      >
        <Slider sliderImages={sliderImages} sliderId={lowerSliderId} />
        <Content
          contentTextBefore={contentTextBefore}
          text={text}
          title={title}
          breakpoints={breakpoints && breakpoints}
          sliderId={lowerSliderId}
          titleStyles={titleStyles}
        />
      </Container>
    </Box>
  )
}

export default Info
