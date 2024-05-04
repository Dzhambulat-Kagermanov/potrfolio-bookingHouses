import TextContent from '@/components/elements/TextContent/TextContent'
import { CSSProperties, FC } from 'react'
import { IInfoContent, IInfoContentBeforeText, IInfoSliderId } from '../Info'
import Breakpoints from './Breakpoints/Breakpoints'

interface IInfoContentProps
  extends IInfoContent,
    IInfoSliderId,
    IInfoContentBeforeText {
  titleStyles?: CSSProperties
}

const Content: FC<IInfoContentProps> = ({
  breakpoints,
  text,
  title,
  sliderId,
  contentTextBefore,
  titleStyles,
}) => {
  return (
    <TextContent
      styles={{
        maxWidth: { tablet: '40%', xs: 'none' },
        display: 'flex',
        flexFlow: 'wrap column',
      }}
      titleStyles={titleStyles}
      text={text}
      title={title}
      beforeTextChildren={
        breakpoints ? (
          <Breakpoints breakpoints={breakpoints} sliderId={sliderId} />
        ) : (
          contentTextBefore && contentTextBefore
        )
      }
    />
  )
}

export default Content
