import CloseButton from '@/components/ui/Buttons/CloseButton'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { setBurgerMenuState } from '@/store/burgerMenu/burgerMenuSlice'
import { Box } from '@mui/material'
import { FC } from 'react'
import Nav from '../Header/Nav/Nav'

const BurgerMenu: FC = () => {
  const dispatch = useAppDispatch()
  const burgerMenuState = useAppSelector((state) => {
    return state.burgerMenu.burgerMenu.menuState
  })
  return (
    <Box
      sx={{
        position: 'fixed',
        transition: '0.3s ease',
        top: `${burgerMenuState ? 0 : '110%'}`,
        right: 0,
        width: '100%',
        display: 'flex',
        flexFlow: 'wrap column',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '4px',
          backgroundColor: 'var(--primaryDarkGrey)',
          borderRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--primaryDarkGreyHover)',
          borderRadius: '5px',
        },
        height: '100%',
        zIndex: 1101,
        backgroundColor: 'rgba(0,0,0,0.9)',
        padding: { bigMobile: '80px', xs: '40px' },
      }}
    >
      <CloseButton
        styles={{ position: 'absolute', left: '40px', top: '40px' }}
        onClick={() => {
          dispatch({
            type: setBurgerMenuState.type,
            payload: { menuState: false },
          })
        }}
      />
      <Nav
        styles={{
          padding: '80px 0 0 0',
          display: { xs: 'flex' },
          flexFlow: 'wrap column',
          flexGrow: 1,
          justifyContent: 'center',
          rowGap: '30px',
        }}
        langStyles={{
          labelStyles: { color: 'white' },
          formStyles: { background: 'rgba(255,255,255,0.5)' },
        }}
        linksClick={() => {
          dispatch({
            type: setBurgerMenuState.type,
            payload: { menuState: false },
          })
        }}
        itemStyles={{ color: 'white', fontSize: '24px' }}
      />
    </Box>
  )
}

export default BurgerMenu
