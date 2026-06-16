import PageHero from '@/components/common/PageHero'
import { heroData } from '@/helper/module/pageHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHero {...heroData} />
    </div>
  )
}

export default page