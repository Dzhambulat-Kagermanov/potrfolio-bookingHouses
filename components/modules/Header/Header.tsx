import Nav from '@/components/modules/Header/Nav/Nav'
import BurgerButton from '@/components/ui/Buttons/BurgerButton'
import SecondButton from '@/components/ui/Buttons/SecondButton'
import Logo from '@/components/ui/Logo/Logo'
import { useAppDispatch } from '@/hooks/reduxHooks'
import useLang from '@/hooks/useLang'
import { setBurgerMenuState } from '@/store/burgerMenu/burgerMenuSlice'
import { AppBar, Box, Container, Toolbar } from '@mui/material'
import { FC } from 'react'

const Header: FC = () => {
  const lang = useLang()
  const dispatch = useAppDispatch()

  return (
    <Box sx={{ margin: '0 0 85px 0' }}>
      <AppBar sx={{ background: 'white' }} elevation={5}>
        <Container fixed>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              paddingLeft: '0px !important',
              paddingRight: '0px !important',
            }}
          >
            <Logo />
            <Nav />
            <Box
              sx={{ display: 'flex', columnGap: '20px', alignItems: 'center' }}
            >
              <SecondButton
                styles={{ display: { mediumMobile: 'block', xs: 'none' } }}
              >
                {lang.header.bookingBtn}
              </SecondButton>
              <BurgerButton
                onClick={() => {
                  dispatch({
                    type: setBurgerMenuState.type,
                    payload: { menuState: true },
                  })
                }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
