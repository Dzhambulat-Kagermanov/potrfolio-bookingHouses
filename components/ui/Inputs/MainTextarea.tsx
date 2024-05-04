import { TextField } from '@mui/material'
import { CSSProperties, Dispatch, FC, SetStateAction } from 'react'

interface IMainInputProps {
  placeholder?: string
  inpState: string
  setInpState: Dispatch<SetStateAction<string>>
  setError?: Dispatch<SetStateAction<boolean>>
  error?: boolean
  errorConditionFunc?: (
    inpState: string,
    error: Dispatch<SetStateAction<boolean>>
  ) => void
  errorMessage?: string
  name?: string
  styles?: CSSProperties
  inputPropsStyles?: CSSProperties
}

const MainInput: FC<IMainInputProps> = ({
  setInpState,
  inpState,
  placeholder,
  styles,
  name,
  errorConditionFunc,
  setError,
  error,
  errorMessage,
  inputPropsStyles,
}) => {
  return (
    <TextField
      error={error && error}
      onChange={(event) => {
        setInpState(event.target.value)
      }}
      helperText={error ? errorMessage : ''}
      onBlur={() => {
        errorConditionFunc && errorConditionFunc(inpState, setError)
      }}
      multiline
      name={name}
      value={inpState}
      label={placeholder || ''}
      InputProps={{
        sx: { borderRadius: 0, height: '125px', ...inputPropsStyles },
      }}
      variant='outlined'
      sx={{
        width: '100%',
        color: 'black',
        ...styles,
      }}
    />
  )
}

export default MainInput
