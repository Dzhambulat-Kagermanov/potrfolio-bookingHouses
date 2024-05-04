import AddButton from '@/components/ui/Buttons/AddButton'
import MainText from '@/components/ui/Text/MainText'
import SecondText from '@/components/ui/Text/SecondText'
import { useAppDispatch } from '@/hooks/reduxHooks'
import {
  addAdditional,
  removeAdditional,
} from '@/store/booking/bookingCheckSlice'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@mui/material'
import { FC, useState } from 'react'
import { IServicesAccordion } from '../ServicesAccordion'

interface IServicesAccordionItemProps extends IServicesAccordion {
  id: number
  isActive: boolean
}

const Item: FC<IServicesAccordionItemProps> = ({
  id,
  title,
  price,
  content,
  isActive,
}) => {
  const [itemActive, setItemActive] = useState<boolean>(isActive)
  const dispatch = useAppDispatch()
  return (
    <Accordion key={id} elevation={1}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: 'var(--primaryLightGrey)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '15px	',
          }}
        >
          <AddButton
            isActive={itemActive}
            onClick={(event) => {
              event.stopPropagation()

              setItemActive((current) => {
                return !!!current
              })
              !itemActive
                ? dispatch({
                    type: addAdditional.type,
                    payload: {
                      id: id,
                      title: title,
                      price: price,
                      content: content,
                    },
                  })
                : dispatch({
                    type: removeAdditional.type,
                    payload: { id: id },
                  })
            }}
          />
          <Box>
            <SecondText>{title}</SecondText>
            <SecondText styles={{ fontFamily: 'OpenSansR' }}>
              {price}
            </SecondText>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: 'transparent',
        }}
      >
        <Box component='ul' sx={{ padding: '25px 0' }}>
          {content.map((el, index: number) => {
            return (
              <Box key={index} component='li'>
                <MainText styles={{ fontSize: '18px' }}>{el}</MainText>
              </Box>
            )
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default Item
