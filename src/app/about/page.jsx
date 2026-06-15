import CoreValues from '@/components/about/CoreValues'
import OurJourney from '@/components/about/OurJourney'
import WhyEduFilosExists from '@/components/about/WhyEduFilosExists'
import AboutBanner from '@/components/layouts/AboutBanner'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutBanner />
      <OurJourney/>
      <WhyEduFilosExists/>
      <CoreValues/>
    </div>
  )
}

export default page
