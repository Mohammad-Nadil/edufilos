import CoreValues from '@/components/about/CoreValues'
import OurJourney from '@/components/about/OurJourney'
import WhyEduFilosExists from '@/components/about/WhyEduFilosExists'
import PageHero from '@/components/common/PageHero'
import { heroData } from '@/helper/about/heroData'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHero {...heroData} />
      <OurJourney/>
      <WhyEduFilosExists/>
      <CoreValues/>
    </div>
  )
}

export default page
