import ContentGroup from '@/components/modules/ContentGroup/ContentGroup'
import useLang from '@/hooks/useLang'
import { FC } from 'react'
import ServicesAccordion from './ServicesAccordion/ServicesAccordion'

const Services: FC = () => {
  const lang = useLang()

  const accordionData = [
    lang.booking.selectionPanel.services.additional.accordions.Breakfast1,
    lang.booking.selectionPanel.services.additional.accordions.Breakfast2,
    lang.booking.selectionPanel.services.additional.accordions.ClassicDinner1,
    lang.booking.selectionPanel.services.additional.accordions.ClassicDinner2,
    lang.booking.selectionPanel.services.additional.accordions.CarCharge,
  ]

  return (
    <ContentGroup
      title={lang.booking.selectionPanel.services.additional.title}
      styles={{ flexGrow: 1, width: { md: 'auto', xs: '100%' } }}
    >
      <ServicesAccordion
        data={accordionData}
        styles={{ margin: '25px 0 0 0' }}
      />
    </ContentGroup>
  )
}

export default Services
