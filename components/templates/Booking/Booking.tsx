'use client'

import { FC } from 'react'
import Cancellation from './Cancellation/Cancellation'
import HeadElem from './Head/Head'
import HutRules from './HurRules/HutRules'
import ImportantInfo from './ImportantInfo/ImportantInfo'
import SelectionPanel from './SelectionPanel/SelectionPanel'

const BookingPage: FC = () => {
  return (
    <>
      <HeadElem />
      <SelectionPanel />
      <HutRules />
      <Cancellation />
      <ImportantInfo />
    </>
  )
}

export default BookingPage
