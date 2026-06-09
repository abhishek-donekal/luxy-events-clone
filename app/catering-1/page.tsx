import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catering | Luxury Event Planning & Catering",
  description:
    "Contact us & our Chef will make a customized menu of your liking! We are here to bring your vision to life & create an experience you & your guests won't ever forget.",
};

const galleryImages = [
  {
    src: "https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/vecteezy_delicious-assortment-of-dishes-serve.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true",
    alt: "Delicious assortment of dishes",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/vecteezy_a-wedding-reception-table-with-candle.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true",
    alt: "Wedding reception table",
  },
  {
    src: "https://img1.wsimg.com/isteam/stock/11598/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true",
    alt: "Luxury event catering",
  },
];

export default function CateringPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#111] py-28 text-center border-b border-[#2a2a2a]">
        <div className="container-luxury">
          <p className="section-heading">Culinary Excellence</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Catering</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      {/* Main Message */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-white mb-4">We Can Curate Absolutely Anything You Like</h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-[#aaa] text-base leading-relaxed mb-10">
            Contact us &amp; our Chef will make a customized menu of your liking ! We are here to bring your vision to
            life &amp; create an experience you &amp; your guests won&apos;t ever forget !
          </p>
          <Link href="/contact" className="btn-gold">
            Find out more
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#111]">
        <div className="container-luxury">
          <p className="section-heading text-center">Gallery</p>
          <h2 className="font-serif text-3xl text-white text-center mb-4">Our Catering Gallery</h2>
          <div className="gold-divider mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="section-heading">Our Specialties</p>
              <h2 className="font-serif text-2xl text-white mb-4">International Cuisine</h2>
              <div className="gold-divider mb-6" />
              <p className="text-[#aaa] text-sm leading-relaxed">
                We specialize in traditional cuisine domestically &amp; from various international regions. Our dishes
                are made using fresh organic recipes and locally grown ingredients, ensuring that every bite is full of
                flavor and culture.
              </p>
            </div>
            <div>
              <p className="section-heading">Customized</p>
              <h2 className="font-serif text-2xl text-white mb-4">Tailored Menus</h2>
              <div className="gold-divider mb-6" />
              <p className="text-[#aaa] text-sm leading-relaxed">
                Every menu is crafted to your specific requirements, dietary preferences, and event style. Our executive
                chef works directly with you to design a dining experience your guests will rave about for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111] text-center">
        <div className="container-luxury max-w-2xl">
          <h2 className="font-serif text-3xl text-white mb-6">Ready to Create Your Menu?</h2>
          <Link href="/contact" className="btn-gold">
            Inquire Here To Book Your Event Now!
          </Link>
        </div>
      </section>
    </>
  );
}
