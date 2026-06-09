import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Luxury Event Planning & Catering",
  description:
    "Discover our luxury event planning services. From weddings to corporate events, we craft unforgettable experiences in Miami, Broward, and Palm Beach.",
};

export default function EventsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#111] py-28 text-center border-b border-[#2a2a2a]">
        <div className="container-luxury">
          <p className="section-heading">Luxury Experiences</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Events</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-4xl text-center">
          <p className="text-[#aaa] text-base leading-relaxed mb-10">
            We provide bespoke Event Planning &amp; Catering services designed for clients who expect nothing less than
            excellence. Our services encompass full-scale planning, design, decor, florists, catering, photography, DJ,
            &amp; on-site execution ensuring that each event is exceptionally managed.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-16">
            {[
              {
                title: "Weddings",
                desc: "Intimate ceremonies to grand receptions — every detail curated to perfection for your most important day.",
              },
              {
                title: "Corporate Events",
                desc: "Professional event management for corporate gatherings, galas, product launches, and conferences.",
              },
              {
                title: "Birthday Celebrations",
                desc: "From milestone birthdays to intimate gatherings, we design celebrations as unique as you are.",
              },
              {
                title: "Private Dinners",
                desc: "Exclusive private dining experiences with custom menus and flawless service for any occasion.",
              },
              {
                title: "Yacht Catering",
                desc: "Luxury catering services for chartered yachts — exceptional cuisine wherever your journey takes you.",
              },
              {
                title: "Special Occasions",
                desc: "Anniversaries, graduations, holiday parties, and any celebration deserving a memorable experience.",
              },
            ].map((event) => (
              <div key={event.title} className="border border-[#2a2a2a] p-6 hover:border-[#c9a96e] transition-colors">
                <h3 className="font-serif text-xl text-white mb-2">{event.title}</h3>
                <div className="w-8 h-px bg-[#c9a96e] mb-4" />
                <p className="text-[#888] text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/contact" className="btn-gold">
              Inquire Here To Book Your Event Now!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
