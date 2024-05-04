import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import useLang from '@/hooks/useLang'
import { switchLang } from '@/store/lang/langSlice'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import Image from 'next/image'
import { FC, useState } from 'react'
import { ILangStyles } from '../Nav/Nav'

interface ILangMenu {
  lang: string
  img: string
}
interface ILangMenuProps extends ILangStyles {
  langsData: ILangMenu[]
}

const LangsMenu: FC<ILangMenuProps> = ({ langsData, langStyles }) => {
  const dispatch = useAppDispatch()
  const currentPageLang = useAppSelector((state) => {
    return state.lang.langCombine.lang
  })
  const [menuElem, setMenuElem] = useState<string>(currentPageLang)
  const handleChange = (event: SelectChangeEvent<string>) => {
    setMenuElem(event.target.value as string)
    dispatch({ type: switchLang.type, payload: { lang: event.target.value } })
  }
  const lang = useLang()

  return (
    <FormControl sx={{ ...langStyles?.formStyles }}>
      <InputLabel sx={{ ...langStyles?.labelStyles }}>
        {lang.header.nav.langMenuLabel}
      </InputLabel>
      <Select value={menuElem} onChange={handleChange}>
        {langsData.map(({ lang, img }) => {
          return (
            <MenuItem value={lang} key={lang}>
              <Image
                src={img}
                width={0}
                height={0}
                style={{ width: '25px', height: '16px' }}
                alt={lang}
              />
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default LangsMenu
