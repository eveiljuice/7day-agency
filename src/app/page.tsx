import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Trust } from '@/components/Trust'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { Portfolio } from '@/components/Portfolio'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
