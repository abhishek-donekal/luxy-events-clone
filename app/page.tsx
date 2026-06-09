import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Luxury Event Planning & Catering | Miami - Broward - Palm Beach",
  description:
    "Our event planning company has over 30 years of experience creating customized, high-end events for individuals & organizations. We turn your dreams into lasting memories.",
};

const features = [
  {
    heading: "Our Cuisine",
    body: "We specialize in traditional cuisine domestically & from various international regions. Our dishes are made using fresh organic recipes and locally grown ingredients, ensuring that every bite is full of flavor and culture.",
    image:
      "https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/vecteezy_delicious-assortment-of-dishes-serve.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true",
  },
  {
    heading: "Our Service",
    body: "We provide bespoke Event Planning & Catering services designed for clients who expect nothing less than excellence. Our services encompass full-scale planning, design, decor, florists, catering, photography, DJ, & on-site execution ensuring that each event is exceptionally managed.",
    image:
      "https://img1.wsimg.com/isteam/stock/11598/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true",
  },
  {
    heading: "Our Vision",
    body: "We create extraordinary, immersive experiences tailored to your vision that embodies elegance & sophistication. Every detail is thoughtfully designed and flawlessly executed to reflect our clients vision to create moments that leave a lasting impression you'll never forget !",
    image:
      "https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/vecteezy_a-wedding-reception-table-with-candle.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0d0d0d] min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/vecteezy_a-wedding-reception-table-with-candle.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1440,cg:true')",
          }}
        />
        <div className="relative z-20 max-w-4xl mx-auto px-6 py-24">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">
            Miami · Broward · Palm Beach
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-6">
            Welcome To Luxury Event Planning &amp; Catering
          </h1>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-8" />
          <p className="text-[#ccc] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Our event planning company has over 30 years of experience creating customized, high-end events for
            individuals &amp; organizations. We turn your dreams into lasting memories.
          </p>
          <Link href="/contact" className="btn-gold">
            Inquire Here To Book Your Event Now!
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury">
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((f) => (
              <div key={f.heading} className="flex flex-col items-center text-center">
                <div className="relative w-full aspect-square mb-6 overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.heading}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h2 className="font-serif text-2xl text-white mb-3">{f.heading}</h2>
                <div className="w-8 h-px bg-[#c9a96e] mb-4" />
                <p className="text-[#aaa] text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interested Section */}
      <section className="py-20 bg-[#111] text-center">
        <div className="container-luxury max-w-3xl">
          <p className="section-heading">Get In Touch</p>
          <h2 className="section-title">Interested In Hosting A Event?</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-[#aaa] text-sm leading-relaxed mb-10">
            If You&apos;re Looking For An Event Planner, Look No Further
          </p>
          <Link href="/contact" className="btn-gold">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Yacht & Flight Banner */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury text-center max-w-3xl">
          <p className="section-heading">New Service</p>
          <h2 className="section-title">
            NOW INTRODUCING CATERING FOR CHARTERED YACHTS &amp; FLIGHTS!
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-[#aaa] text-sm leading-relaxed mb-6">
            We are proud to now offer exclusive, luxury catering services for chartered yachts and private flights,
            delivering exceptional cuisine and elevated dining experiences wherever your journey takes you. Whether
            you&apos;re planning an intimate getaway or hosting distinguished guests, our team ensures every detail is
            flawlessly executed. Please inquire below to learn more and customize your experience.
          </p>
          <Link href="/diamond-line#b84f7a18-aba9-454f-a620-75dbdb7a1bce" className="btn-gold mr-4">
            Learn More
          </Link>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-[#111]" id="inquiry">
        <div className="container-luxury max-w-2xl text-center">
          <p className="section-heading">Book Now</p>
          <h2 className="section-title">Inquire Here To Book Your Event Now!</h2>
          <div className="gold-divider mx-auto mb-10" />
          <ContactForm showFileUpload={true} submitLabel="Send Message" />
        </div>
      </section>
    </>
  );
}
