import ContentGroup from '@/components/modules/ContentGroup/ContentGroup'
import useLang from '@/hooks/useLang'
import { Box, Container } from '@mui/material'
import { FC } from 'react'
import Group from '../Group/Group'

const ImportantInfo: FC = () => {
  const lang = useLang()
  return (
    <Box className='--parentBlock'>
      <Container maxWidth='xl'>
        <Box sx={{ width: { md: 'calc(100% - 485px)', xs: '100%' } }}>
          <ContentGroup title={lang.booking.importantInfo.title}>
            <Group data={lang.booking.importantInfo.content} />
          </ContentGroup>
        </Box>
      </Container>
    </Box>
  )
}

export default ImportantInfo
