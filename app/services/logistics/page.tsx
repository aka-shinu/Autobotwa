'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LogisticsStickyScroll from '@/components/LogisticsStickyScroll'
import LogisticsHero from '@/components/LogisticsHero'
import LogisticsServiceSection from '@/components/LogisticsServiceSection'
export default function LogisticsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <LogisticsServiceSection />
        <LogisticsHero />
      </main>
      <Footer />
    </>
  )
}
