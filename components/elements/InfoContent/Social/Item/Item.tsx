import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Item: FC<{ img: string; href: string }> = ({ img, href }) => {
  return (
    <Box
      component='li'
      sx={{
        backgroundColor: 'var(--primaryDarkGrey)',
        borderRadius: '50%',
        transition: '0.1s ease',
        '&:hover': {
          backgroundColor: 'var(--primaryDarkGreyHover)',
          transform: 'scale(1.1)',
        },
      }}
    >
      <Link
        href={href}
        style={{
          padding: '15px',
          width: '21px',
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'content-box',
        }}
      >
        <Image
          src={img}
          width={0}
          height={0}
          style={{ height: '21px', width: 'auto' }}
          alt={href}
        />
      </Link>
    </Box>
  )
}

export default Item
