import React from 'react'

function Testimonials() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/img/t1.jpg"/>
                <p className="leading-relaxed">&quot;Amazing crew! Transformed my living room - professional, clean, and beautiful work. 5 stars&quot;</p>
                <span className="inline-block h-1 w-10 rounded bg-[#2e0249] mt-12 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Martin Foster</h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/img/t2.jpg"/>
                <p className="leading-relaxed">Brought my vision to life! The mural is exactly what I wanted - perfect for the nursery. Thanks</p>
                <span className="inline-block h-1 w-10 rounded bg-[#2e0249] mt-12 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Bryan Cirius</h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/img/t3.jpg"/>
                <p className="leading-relaxed">John&apos;s carpentry skills are top-notch! Built sturdy, beautiful bookshelves - exactly on time and on budget. Highly recommend!</p>
                <span className="inline-block h-1 w-10 rounded bg-[#2e0249] mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Jane Dowser</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
