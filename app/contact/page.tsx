import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Get in touch with us for bookings, quotes, or any inquiries. Hum aapki help ke liye hamesha ready hain!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Have questions or want to book our services? Humse baat karein! We're here to help 
                    and provide you with the best travel and logistics solutions.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">+91 XXXXX XXXXX</p>
                        <p className="text-gray-600 text-sm">24/7 Available</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">info@yadavtourstravel.com</p>
                        <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-600">India</p>
                        <p className="text-gray-600 text-sm">Services across all major cities</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 8:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between pt-2 border-t border-gray-200">
                        <span className="font-semibold">Emergency:</span>
                        <span className="font-semibold">24/7 Available</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Fill out the form below and we'll get back to you as soon as possible. 
                    Aapki query ka reply jaldi se jaldi denge.
                  </p>
                  <ContactForm />
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-16 bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Quick Service Requests
                </h2>
                <p className="text-gray-700 text-center mb-6">
                  Need immediate assistance? Call us directly or send a WhatsApp message for faster response.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">🚗 Car Rental</p>
                    <p className="text-gray-600 text-sm">Book your vehicle now</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">✨ Luxury Cars</p>
                    <p className="text-gray-600 text-sm">Premium vehicles available</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">📦 Logistics</p>
                    <p className="text-gray-600 text-sm">Get a logistics quote</p>
                  </div>
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


























