"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="py-20 md:px-0 px-5 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-8xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto" 
             >
                
                <img
                  src="/images/founder.png"
                  alt="Name Here Founder"
                  
                  className="relative w-full bg-transparent  h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 order-1 lg:order-2"
            >
              {/* Heading */}
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Meet the{" "}
                  <span
                    className="block mt-2"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                      color: "#dc2626",
                    }}
                  >
                    founder
                  </span>
                </motion.h2>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <p
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  To build a travel company that connects people with India's{" "}
                  <span
                    className="text-red-600 font-semibold"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                    }}
                  >
                    incredible destinations
                  </span>
                  , it takes a{" "}
                  <span
                    className="text-red-600 font-semibold"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                    }}
                  >
                    passionate leader
                  </span>
                  . Get to know the{" "}
                  <span
                    className="text-red-600 font-semibold"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontStyle: "italic",
                    }}
                  >
                    driving force
                  </span>{" "}
                  behind Name Here.
                </p>
              </motion.div>

              {/* Founder's Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6"
              >
                <div className="border-l-4 border-red-600 pl-6 py-4">
                  <p
                    className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4"
                    style={{
                      fontFamily: "var(--font-playfair)",
                    }}
                  >
                    "Every journey begins with a single step. At Name Here, we don't just provide transportation—we create{" "}
                    <span className="text-red-600 font-semibold">memories</span> that last a lifetime."
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    style={{
                      fontFamily: "var(--font-poppins)",
                    }}
                  >
                    — Founder, Name Here
                  </p>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4"
              >
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
