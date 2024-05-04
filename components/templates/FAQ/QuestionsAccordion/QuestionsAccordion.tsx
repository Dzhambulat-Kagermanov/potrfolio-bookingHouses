import useLang from '@/hooks/useLang'
import { Box, Container } from '@mui/material'
import { FC, useState } from 'react'
import Item from './Item/Item'

const QuestionsAccordion: FC = () => {
  const lang = useLang()
  const [accordionState, setAccordionState] = useState<number | null>()
  return (
    <Box sx={{ padding: '50px 0 0 0' }} className='--parentBlock'>
      <Container maxWidth='xl'>
        <Item
          summary={lang.faq.questions.prices[0]}
          details={lang.faq.questions.prices[1]}
          id={1}
          isActive={1 === accordionState}
          setExpand={setAccordionState}
        />
        <Item
          summary={lang.faq.questions.cancellation[0]}
          details={lang.faq.questions.cancellation[1]}
          id={2}
          isActive={2 === accordionState}
          setExpand={setAccordionState}
        />
        <Item
          summary={lang.faq.questions.walkUpToHut[0]}
          details={lang.faq.questions.walkUpToHut[1]}
          id={3}
          isActive={3 === accordionState}
          setExpand={setAccordionState}
        />
        <Item
          summary={lang.faq.questions.capacity[0]}
          details={lang.faq.questions.capacity[1]}
          id={4}
          isActive={4 === accordionState}
          setExpand={setAccordionState}
        />
        <Item
          summary={lang.faq.questions.pets[0]}
          details={lang.faq.questions.pets[1]}
          id={5}
          isActive={5 === accordionState}
          setExpand={setAccordionState}
        />
        <Item
          summary={lang.faq.questions.check[0]}
          details={lang.faq.questions.check[1]}
          id={6}
          isActive={6 === accordionState}
          setExpand={setAccordionState}
        />
      </Container>
    </Box>
  )
}

export default QuestionsAccordion
