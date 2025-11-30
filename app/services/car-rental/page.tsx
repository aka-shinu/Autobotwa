import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function CarRentalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                Car Rental Services
              </h1>
              <p className="text-gray-600 text-lg text-center mb-12">
                Explore India at your own pace with our reliable and well-maintained vehicles
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Travel Across India with Comfort
                </h2>
                <p className="text-gray-700 mb-6">
                  Name Here offers comprehensive car rental services across all major cities 
                  and tourist destinations in India. Whether you're planning a family vacation, business 
                  trip, or a solo adventure, we have the perfect vehicle for you.
                </p>
                <p className="text-gray-700 mb-6">
                  Humare saath aap kisi bhi jagah travel kar sakte hain. Aapki journey safe aur comfortable 
                  hogi, yeh hamara promise hai.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Our Services Include
                </h2>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>Pan-India Coverage:</strong> Available in all major cities including Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, and more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>Well-Maintained Fleet:</strong> Regular servicing ensures all our vehicles are in top condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>Flexible Rental Options:</strong> Daily, weekly, and monthly rental plans to suit your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>Experienced Drivers:</strong> Professional and licensed drivers available on request</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>24/7 Customer Support:</strong> Round-the-clock assistance for any queries or emergencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span><strong>Competitive Pricing:</strong> Best rates in the market with transparent pricing, no hidden charges</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Vehicle Options
                </h2>
                <p className="text-gray-700 mb-6">
                  We offer a wide range of vehicles to choose from:
                </p>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Economy cars for budget-conscious travelers</li>
                  <li>• Sedans for comfortable city and highway travel</li>
                  <li>• SUVs for family trips and rough terrain</li>
                  <li>• Multi-utility vehicles (MUVs) for group travel</li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-8 mt-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Why Choose Us?
                  </h3>
                  <p className="text-gray-700">
                    With years of experience in the travel industry, we understand the importance of 
                    reliability and comfort. Our commitment to customer satisfaction has made us one 
                    of the most trusted car rental services in India. Aapki safety aur comfort hamari 
                    top priority hai.
                  </p>
                </div>

                <div className="text-center mt-12">
                  <Button href="/contact" variant="primary">
                    Book Your Car Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


























