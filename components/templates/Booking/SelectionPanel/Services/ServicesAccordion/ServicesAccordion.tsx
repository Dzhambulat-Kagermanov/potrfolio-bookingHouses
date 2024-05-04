import { useAppSelector } from '@/hooks/reduxHooks'
import { Box } from '@mui/material'
import { CSSProperties, FC } from 'react'
import Item from './Item/Item'

export interface IServicesAccordion {
  title: string
  price: string
  content: string[]
}
interface IServicesAccordionProps {
  styles: CSSProperties
  data: IServicesAccordion[]
}

const ServicesAccordion: FC<IServicesAccordionProps> = ({ data, styles }) => {
  const additionalServices = useAppSelector((state) => {
    return state.booking.booking.additional
  }).map((el) => {
    return el.id
  })
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'wrap column',
        rowGap: '25px',
        ...styles,
      }}
    >
      {data.map(({ title, price, content }, index) => {
        return (
          <Item
            key={index}
            content={content}
            price={price}
            title={title}
            id={index}
            isActive={additionalServices.includes(index)}
          />
        )
      })}
    </Box>
  )
}

export default ServicesAccordion
