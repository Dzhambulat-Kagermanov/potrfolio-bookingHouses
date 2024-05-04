import { buttonEventType } from '@/types/buttonEventType'
import { Box } from '@mui/material'
import Link from 'next/link'
import { CSSProperties, FC, ReactElement } from 'react'

interface HeaderNavItemProps {
  children: string | ReactElement
  href: string
  styles?: CSSProperties
  onClick?: buttonEventType
}

const Item: FC<HeaderNavItemProps> = ({ children, href, styles, onClick }) => {
  return (
    <Box component='li' onClick={onClick}>
      <Link href={href} style={{ textTransform: 'uppercase', ...styles }}>
        {children}
      </Link>
    </Box>
  )
}

export default Item
