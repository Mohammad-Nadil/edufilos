import PageHero from '@/components/common/PageHero'
import CtaBanner from '@/components/modules/CtaBanner'
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
      <CtaBanner/>
    </div>
  )
}

export default page