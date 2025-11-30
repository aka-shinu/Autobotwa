import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                About Name Here
              </h1>
              <p className="text-gray-600 text-lg text-center mb-12">
                Your trusted partner for premium travel and logistics solutions across India
              </p>

              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Who We Are
                </h2>
                <p className="text-gray-700 mb-6">
                  Name Here is a leading provider of car rental, luxury vehicle, and 
                  logistics services across India. With years of experience in the travel and 
                  transportation industry, we have built a reputation for reliability, quality, 
                  and customer satisfaction.
                </p>
                <p className="text-gray-700 mb-6">
                  Hamara mission hai aapko best-in-class travel aur logistics solutions provide karna. 
                  Safety, comfort, aur reliability - yeh teen cheezein hain jo humari service ko 
                  unique banati hain.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🚗 Car Rental</h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive car rental services available across India for all your travel needs.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">✨ Luxury Cars</h3>
                    <p className="text-gray-600 text-sm">
                      Premium luxury vehicles on rent for special occasions, business travel, and events.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">📦 Logistics</h3>
                    <p className="text-gray-600 text-sm">
                      Complete logistics solutions for businesses with safe and timely delivery services.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Our Values
                </h2>
                <ul className="space-y-4 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-gray-900">Reliability:</strong> We understand the importance of being on time and keeping our promises. 
                      Aapki trust hamari sabse badi priority hai.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-gray-900">Safety:</strong> All our vehicles are well-maintained and our drivers are trained professionals. 
                      Aapki safety humesha hamari top concern rehti hai.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-gray-900">Customer Focus:</strong> Your satisfaction is our success. We go the extra mile to ensure 
                      aapko best experience mile.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong className="text-gray-900">Transparency:</strong> Clear pricing with no hidden charges. Jo price bataya, wahi charge 
                      hota hai - simple aur straightforward.
                    </div>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Our Reach
                </h2>
                <p className="text-gray-700 mb-6">
                  We provide services across all major cities and tourist destinations in India, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Jaipur'].map((city) => (
                    <div key={city} className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-gray-900">{city}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mb-8">
                  Aur bhi cities mein hum available hain. Contact karke details le sakte hain!
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Why Choose Us?
                </h2>
                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <ul className="space-y-3 text-gray-700">
                    <li>• <strong>Experienced Team:</strong> Years of industry experience ensures quality service</li>
                    <li>• <strong>Wide Network:</strong> Extensive coverage across India</li>
                    <li>• <strong>Competitive Pricing:</strong> Best rates without compromising on quality</li>
                    <li>• <strong>24/7 Support:</strong> Always available when you need us</li>
                    <li>• <strong>Flexible Solutions:</strong> Customized packages to meet your specific needs</li>
                    <li>• <strong>Well-Maintained Fleet:</strong> Regular servicing keeps our vehicles in top condition</li>
                  </ul>
                </div>

                <p className="text-gray-700 mb-8 text-lg">
                  At Name Here, we believe in building lasting relationships with our customers. 
                  Whether you need a car for a weekend trip, a luxury vehicle for a special occasion, or 
                  logistics solutions for your business, we're here to serve you with dedication and excellence.
                </p>

                <p className="text-gray-700 text-lg">
                  Aapka saath dekar hum proud feel karte hain. Har customer hamare liye important hai, 
                  aur hum har baar aapko best service dene ki koshish karte hain.
                </p>

                <div className="text-center mt-12">
                  <Button href="/contact" variant="primary">
                    Get in Touch
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


























