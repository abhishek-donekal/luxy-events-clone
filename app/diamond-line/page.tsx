import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diamond Line | Luxury Event Planning & Catering",
  description:
    "Exclusive yacht and airline catering services by Luxury Event Planning & Catering. Exceptional cuisine and elevated dining experiences wherever your journey takes you.",
};

export default function DiamondLinePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-[#0d0d0d]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://img1.wsimg.com/isteam/stock/11598/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1440,cg:true')",
          }}
        />
        <div className="relative z-10 container-luxury max-w-3xl py-24">
          <p className="section-heading">Exclusive Services</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            Diamond Line
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-[#bbb] text-base leading-relaxed max-w-2xl mx-auto">
            We invite you to inquire about Diamond Lines&apos; exclusive yacht and airline catering services, where
            luxury meets exceptional culinary craftsmanship.
          </p>
        </div>
      </section>

      {/* Intro description */}
      <section className="py-16 bg-[#0d0d0d]">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-[#aaa] text-base leading-relaxed mb-4">
            Our bespoke menus are thoughtfully curated to deliver refined, high-quality cuisine tailored to the unique
            demands of in-flight and on-board dining.
          </p>
          <p className="text-[#aaa] text-base leading-relaxed">
            From elegant small bites to full gourmet experiences, each offering is prepared with premium ingredients
            and meticulous attention to detail—ensuring a seamless, sophisticated dining experience above the clouds
            and across the sea.
          </p>
        </div>
      </section>

      {/* Our Passion */}
      <section id="b84f7a18-aba9-454f-a620-75dbdb7a1bce" className="py-20 bg-[#111]">
        <div className="container-luxury max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-heading">Who We Are</p>
              <h2 className="font-serif text-3xl text-white mb-4">Our Passion</h2>
              <div className="gold-divider mb-6" />
              <p className="text-[#aaa] text-sm leading-relaxed mb-6">
                Diamond Line represents the pinnacle of our luxury catering offering — exclusive services crafted for
                discerning clients aboard chartered yachts and private flights. We deliver exceptional cuisine and
                elevated dining experiences wherever your journey takes you.
              </p>
              <p className="text-[#aaa] text-sm leading-relaxed">
                Whether you&apos;re planning an intimate getaway or hosting distinguished guests, our team ensures every
                detail is flawlessly executed with the same passion and precision we bring to all of our events.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://img1.wsimg.com/isteam/stock/11598/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true"
                alt="Diamond Line Yacht Catering"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Services */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="section-heading">Track Record</p>
              <h3 className="font-serif text-2xl text-white mb-4">Our Experience</h3>
              <div className="gold-divider mb-6" />
              <p className="text-[#aaa] text-sm leading-relaxed">
                With years of experience in the event planning industry, we have the knowledge and expertise to handle
                every aspect of your event. From vendor coordination to timeline management, we are dedicated to making
                your event a success.
              </p>
            </div>
            <div>
              <p className="section-heading">What We Offer</p>
              <h3 className="font-serif text-2xl text-white mb-4">Our Services</h3>
              <div className="gold-divider mb-6" />
              <p className="text-[#aaa] text-sm leading-relaxed">
                We offer a variety of event planning services, including full-service planning, day-of coordination, and
                custom packages. Whether you need help with every detail or just need someone to manage the day-of, we
                have you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111] text-center">
        <div className="container-luxury max-w-2xl">
          <p className="section-heading">Inquire Today</p>
          <h2 className="font-serif text-3xl text-white mb-6">
            Elevate Your Journey With Diamond Line
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-[#aaa] text-sm mb-10">
            Please inquire below to learn more and customize your experience.
          </p>
          <Link href="/contact" className="btn-gold">
            Inquire Here To Book Your Event Now!
          </Link>
        </div>
      </section>
    </>
  );
}
