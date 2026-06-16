import PageHero from '@/components/common/PageHero'
import ModulesSection from '@/components/modules/ModulesSection'
import OperationsSection from '@/components/modules/OperationsSection'
import { heroData } from '@/helper/module/pageHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHero {...heroData} />
      <ModulesSection/>
      <OperationsSection/>
    </div>
  )
}

export default page