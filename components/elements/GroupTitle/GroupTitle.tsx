import SubtitleText from '@/components/ui/Text/SubtitleText'
import { IDefaultProps } from '@/types/defaultProps'
import { Box } from '@mui/material'
import { FC } from 'react'

const GroupTitle: FC<IDefaultProps> = ({ children, styles }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexFlow: 'wrap column',
        rowGap: '25px',
        ...styles,
      }}
    >
      <SubtitleText>{children}</SubtitleText>
      <div style={{ width: '100%', height: '2px', background: 'black' }} />
    </Box>
  )
}

export default GroupTitle
