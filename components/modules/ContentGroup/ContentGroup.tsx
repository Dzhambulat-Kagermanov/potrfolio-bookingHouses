import GroupTitle from '@/components/elements/GroupTitle/GroupTitle'
import { IDefaultProps } from '@/types/defaultProps'
import { Box } from '@mui/material'
import { FC } from 'react'

interface IContentGroupProps extends IDefaultProps {
  title: string
  className?: string
}

const ContentGroup: FC<IContentGroupProps> = ({
  title,
  children,
  styles,
  className,
}) => {
  return (
    <Box sx={{ ...styles }} className={className}>
      <GroupTitle>{title}</GroupTitle>
      {children}
    </Box>
  )
}

export default ContentGroup
