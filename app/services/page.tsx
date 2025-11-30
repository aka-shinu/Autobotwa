import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import Button from '@/components/Button'
import { SERVICES } from '@/constants/services'

export default function ServicesPage() {

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive travel and logistics solutions tailored to your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {SERVICES.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <div className="text-center">
              <Button href="/contact" variant="primary">
                Get a Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


