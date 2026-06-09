import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Luxury Event Planning & Catering",
  description:
    "Meet Raj & Lana — over 30 years of experience creating high-end customized events. We don't just plan events, we craft memories. Serving Miami, Broward, and Palm Beach.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#111] py-28 text-center border-b border-[#2a2a2a]">
        <div className="container-luxury">
          <p className="section-heading">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">About Us</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-heading">The Dream Team</p>
              <h2 className="font-serif text-3xl text-white mb-4">
                We Don&apos;t Just Plan Events, We Craft Memories
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-[#aaa] text-sm leading-relaxed mb-6">
                Raj &amp; Lana: The Dream Team of Event Creation — a husband-and-wife team whose passion for creating
                extraordinary moments has defined over three decades of luxury event excellence.
              </p>
              <p className="text-[#aaa] text-sm leading-relaxed">
                Our event planning company has over 30 years of experience creating customized, high-end events for
                individuals &amp; organizations. We turn your dreams into lasting memories.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/vecteezy_a-wedding-reception-table-with-candle.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true"
                alt="Luxury event setup"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#111]">
        <div className="container-luxury max-w-5xl">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "A Legacy of Excellence",
                body: "Operating for over 30 years creating high-end customized events for the most discerning clients.",
              },
              {
                title: "Your Vision, Our Expertise",
                body: "Each client receives a dedicated event manager committed to bringing your exact vision to life.",
              },
              {
                title: "Let Us Create Your Dream Event",
                body: "Contact us today for a free consultation and begin crafting your unforgettable experience.",
              },
            ].map((v) => (
              <div key={v.title} className="border border-[#2a2a2a] p-8 hover:border-[#c9a96e] transition-colors">
                <h3 className="font-serif text-xl text-white mb-3">{v.title}</h3>
                <div className="w-8 h-px bg-[#c9a96e] mx-auto mb-4" />
                <p className="text-[#888] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-4xl text-center">
          <p className="section-heading">What We Do</p>
          <h2 className="font-serif text-3xl text-white mb-4">Full-Service Event Planning</h2>
          <div className="gold-divider mx-auto mb-10" />
          <p className="text-[#aaa] text-sm leading-relaxed mb-8">
            We provide venue selection, event coordination, catering, floral arrangements, décor, entertainment,
            photography, and DJ services for weddings, corporate events, birthday parties, and special occasions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Venue Selection",
              "Event Coordination",
              "Catering",
              "Floral Arrangements",
              "Décor",
              "Entertainment",
              "Photography",
              "DJ Services",
            ].map((s) => (
              <span
                key={s}
                className="border border-[#c9a96e] text-[#c9a96e] px-4 py-1 text-xs tracking-widest uppercase"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gifting Partners */}
      <section className="py-20 bg-[#111] text-center">
        <div className="container-luxury max-w-3xl">
          <p className="section-heading">Partners</p>
          <h2 className="font-serif text-3xl text-white mb-4">Our Luxury Gifting Partners</h2>
          <div className="gold-divider mx-auto mb-12" />
          <p className="text-[#666] text-sm italic">Partner logos available on the live site.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d0d] text-center">
        <div className="container-luxury max-w-2xl">
          <h2 className="font-serif text-3xl text-white mb-6">Contact us today for a free consultation</h2>
          <Link href="/contact" className="btn-gold">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
