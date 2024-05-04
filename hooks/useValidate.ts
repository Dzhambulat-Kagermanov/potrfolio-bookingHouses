import { Dispatch, SetStateAction } from 'react'

interface IUseValidateInpsData {
  inpState: string
  setInpState: Dispatch<SetStateAction<string>>
  error: boolean
  setError: Dispatch<SetStateAction<boolean>>
  required: boolean
}

interface IUseValidateProps {
  inpsData: IUseValidateInpsData[]
  action: () => void
  cleared?: boolean
}

const useValidate: (props: IUseValidateProps) => void = (props) => {
  const { action, inpsData, cleared } = props

  if (
    inpsData.every(({ error }) => {
      return !!!error
    })
  ) {
    if (
      inpsData.every(({ inpState, required }) => {
        return required ? !!inpState : true
      })
    ) {
      action()
      if (cleared) {
        inpsData.forEach(({ setInpState }) => {
          setInpState('')
        })
      }
    } else if (
      !inpsData.some(({ inpState, required }) => {
        return required ? !!inpState : true
      })
    ) {
      inpsData.forEach(({ setError }) => {
        setError(true)
      })
    } else {
      const checkState = (
        state: string,
        setErrorState: Dispatch<SetStateAction<boolean>>
      ) => {
        if (!state) {
          setErrorState(true)
        }
      }

      inpsData.forEach(({ inpState, setError, required }) => {
        required && checkState(inpState, setError)
      })
    }
  }
}

export default useValidate
