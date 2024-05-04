import MainText from '@/components/ui/Text/MainText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import { Dispatch, FC, ReactElement, SetStateAction } from 'react'

interface IAccordionQuestionsItemProps {
  summary: string | ReactElement
  details: string[] | ReactElement[]
  isActive: boolean
  setExpand: Dispatch<SetStateAction<number | null | undefined>>
  id: number
}

const Item: FC<IAccordionQuestionsItemProps> = ({
  summary,
  details,
  isActive,
  setExpand,
  id,
}) => {
  return (
    <>
      <Accordion
        data-accordion-id={id}
        disableGutters
        sx={{
          padding: '0 20px',
          backgroundColor: `${isActive && 'var(--primaryLightGrey)'}`,
        }}
        elevation={3}
        expanded={isActive}
        onChange={() => {
          isActive ? setExpand(null) : setExpand(id)
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ padding: '10px 0' }}
        >
          <MainText
            styles={{ fontFamily: 'OpenSansR', textTransform: 'uppercase' }}
          >
            {summary}
          </MainText>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '10px 0 30px 0' }}>
          {details.map((el, index) => {
            return (
              <Box key={index}>
                <Typography sx={{ fontFamily: 'OpenSansR', fontSize: '16px' }}>
                  {el}
                </Typography>
              </Box>
            )
          })}
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Item
