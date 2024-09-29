/* eslint-disable */

import HeroSection from '@/components/HeroSection'
import TrustedCompanies from '@/components/TrustedCompanies'
import CourseList from '@/components/CourseList'
import TrustedByCompanies from '@/components/TrustedByCompanies'
import JoinUs from '@/components/JoinUs'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedCompanies />
      <TrustedByCompanies />
      <CourseList />
      {/* <JoinUs /> */}
      <Testimonials />
      <FAQ />
    </main>
  )
}