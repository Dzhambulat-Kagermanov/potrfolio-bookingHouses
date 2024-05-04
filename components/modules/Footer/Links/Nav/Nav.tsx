import Item from '@/components/elements/LinkItem/LinkItem'
import useLang from '@/hooks/useLang'
import { Box } from '@mui/material'
import { FC } from 'react'

const Nav: FC = () => {
  const lang = useLang()
  return (
    <Box component='nav'>
      <Box
        component='ul'
        sx={{
          display: 'flex',
          justifyContent: { smallMobile: 'flex-start', xs: 'center' },
          gap: '15px',
          flexWrap: 'wrap',
        }}
      >
        <Item
          href='/docs/terms'
          styles={{
            fontSize: '16px',
            fontFamily: 'OpenSansL',
            textAlign: 'center',
          }}
        >
          {lang.footer.links.termsLink}
        </Item>
        <Item
          href='/docs/cancelPolicy'
          styles={{
            fontSize: '16px',
            fontFamily: 'OpenSansL',
            textAlign: 'center',
          }}
        >
          {lang.footer.links.cancellationPolicylink}
        </Item>
        <Item
          href='/docs/privacyPolicy'
          styles={{
            fontSize: '16px',
            fontFamily: 'OpenSansL',
            textAlign: 'center',
          }}
        >
          {lang.footer.links.privacyPolicyLink}
        </Item>
      </Box>
    </Box>
  )
}

export default Nav
