import SecondButton from '@/components/ui/Buttons/SecondButton'
import MainInput from '@/components/ui/Inputs/MainInput'
import MainTextarea from '@/components/ui/Inputs/MainTextarea'
import useLang from '@/hooks/useLang'
import useValidate from '@/hooks/useValidate'
import { emailRegxp, nameRegxp } from '@/utils/regxp'
import { Box } from '@mui/material'
import { CSSProperties, FC, useState } from 'react'

interface IAboutFormContentProps {
  styles?: CSSProperties
}

const Content: FC<IAboutFormContentProps> = ({ styles }) => {
  const lang = useLang()
  const [firstNameInp, setFirstNameInp] = useState<string>('')
  const [firstNameInpError, setFirstNameInpError] = useState<boolean>(false)
  const [lastNameInp, setLastNameInp] = useState<string>('')
  const [lastNameInpError, setLastNameInpError] = useState<boolean>(false)
  const [emailInp, setEmailInp] = useState<string>('')
  const [emailInpError, setEmailInpError] = useState<boolean>(false)
  const [subjectInp, setSubjectInp] = useState<string>('')
  const [subjectInpError, setSubjectInpError] = useState<boolean>(false)
  const [messageInp, setMessageInp] = useState<string>('')
  const [messageInpError, setMessageInpError] = useState<boolean>(false)
  const formData = [
    {
      inpState: firstNameInp,
      setInpState: setFirstNameInp,
      error: firstNameInpError,
      setError: setFirstNameInpError,
      required: true,
    },
    {
      inpState: lastNameInp,
      setInpState: setLastNameInp,
      error: lastNameInpError,
      setError: setLastNameInpError,
      required: false,
    },
    {
      inpState: emailInp,
      setInpState: setEmailInp,
      error: emailInpError,
      setError: setEmailInpError,
      required: true,
    },
    {
      inpState: subjectInp,
      setInpState: setSubjectInp,
      error: subjectInpError,
      setError: setSubjectInpError,
      required: false,
    },
    {
      inpState: messageInp,
      setInpState: setMessageInp,
      error: messageInpError,
      setError: setMessageInpError,
      required: true,
    },
  ]

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useValidate({
      inpsData: formData,
      action: () => {
        alert('Данные выведены в консоль\nData output to console')
        console.log({
          firstNameInp,
          lastNameInp,
          emailInp,
          subjectInp,
          messageInp,
        })
      },
      cleared: true,
    })
  }

  return (
    <Box component='form' onSubmit={handleSubmit} sx={{ ...styles }}>
      <Box>
        <MainInput
          name='firstName'
          placeholder={lang.about.form.firstNameInp}
          styles={{ margin: '0 0 25px 0' }}
          error={firstNameInpError}
          setError={setFirstNameInpError}
          errorConditionFunc={(
            inpState: string,
            error: (bool: boolean) => void
          ) => {
            if (!nameRegxp.test(inpState)) {
              error(true)
            } else {
              error(false)
            }
          }}
          errorMessage={lang.about.form.inputErrorMessage}
          inpState={firstNameInp}
          setInpState={setFirstNameInp}
        />
        <MainInput
          name='lastName'
          placeholder={lang.about.form.lastNameInp}
          styles={{ margin: '0 0 25px 0' }}
          error={lastNameInpError}
          setError={setLastNameInpError}
          errorConditionFunc={(
            inpState: string,
            error: (bool: boolean) => void
          ) => {
            if (inpState) {
              if (!nameRegxp.test(inpState)) {
                error(true)
              } else {
                error(false)
              }
            }
          }}
          errorMessage={lang.about.form.inputErrorMessage}
          inpState={lastNameInp}
          setInpState={setLastNameInp}
        />
      </Box>
      <MainInput
        name='email'
        placeholder={lang.about.form.emailInp}
        styles={{ margin: '0 0 25px 0' }}
        error={emailInpError}
        setError={setEmailInpError}
        errorConditionFunc={(
          inpState: string,
          error: (bool: boolean) => void
        ) => {
          if (!emailRegxp.test(inpState)) {
            error(true)
          } else {
            error(false)
          }
        }}
        errorMessage={lang.about.form.inputErrorMessage}
        inpState={emailInp}
        setInpState={setEmailInp}
      />
      <MainInput
        name='subject'
        placeholder={lang.about.form.subjectInp}
        styles={{ margin: '0 0 25px 0' }}
        error={subjectInpError}
        setError={setSubjectInpError}
        errorConditionFunc={(
          inpState: string,
          error: (bool: boolean) => void
        ) => {
          if (inpState) {
            if (!nameRegxp.test(inpState)) {
              error(true)
            } else {
              error(false)
            }
          }
        }}
        errorMessage={lang.about.form.inputErrorMessage}
        inpState={subjectInp}
        setInpState={setSubjectInp}
      />
      <MainTextarea
        name='message'
        placeholder={lang.about.form.messageInp}
        styles={{ margin: '0 0 25px 0' }}
        error={messageInpError}
        setError={setMessageInpError}
        errorConditionFunc={(
          inpState: string,
          error: (bool: boolean) => void
        ) => {
          if (inpState.length < 5) {
            error(true)
          } else {
            error(false)
          }
        }}
        errorMessage={lang.about.form.inputErrorMessage}
        inpState={messageInp}
        setInpState={setMessageInp}
      />
      <SecondButton styles={{ padding: '15px 80px' }} type='submit'>
        {lang.about.form.button}
      </SecondButton>
    </Box>
  )
}

export default Content

// const checkState = (
//   state: string,
//   setErrorState: Dispatch<SetStateAction<boolean>>
// ) => {
//   if (!state) {
//     setErrorState(true)
//   }
// }
//
// if (
//   !(
//     firstNameInpError ||
//     lastNameInpError ||
//     emailInpError ||
//     subjectInpError ||
//     messageInpError
//   )
// ) {
//   if (firstNameInp && emailInp && messageInp) {
//     alert('Данные выведены в консоль\nData output to console')
//     console.log({
//       firstNameInp,
//       lastNameInp,
//       emailInp,
//       subjectInp,
//       messageInp,
//     })
//     setFirstNameInp('')
//     setLastNameInp('')
//     setEmailInp('')
//     setSubjectInp('')
//     setMessageInp('')
//   } else if (!(firstNameInp || emailInp || messageInp)) {
//     setFirstNameInpError(true)
//     setEmailInpError(true)
//     setMessageInpError(true)
//   } else {
//     checkState(firstNameInp, setFirstNameInpError)
//     checkState(emailInp, setEmailInpError)
//     checkState(messageInp, setMessageInpError)
//   }
// }
