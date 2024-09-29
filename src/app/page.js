/* eslint-disable */

import HeroSection from '@/components/HeroSection'
import TrustedCompanies from '@/components/TrustedCompanies'
import CourseList from '@/components/CourseList'
import TrustedByCompanies from '@/components/TrustedByCompanies'
import JoinUs from '@/components/JoinUs'
import FAQ from '@/components/FAQ'



export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedCompanies />
      <CourseList />
      <TrustedByCompanies />
      {/* <JoinUs /> */}
      <FAQ />
    </main>
  )
}