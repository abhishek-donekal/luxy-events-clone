import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meal Plans | Luxury Event Planning & Catering",
  description:
    "Customized meal plans exquisitely curated to reflect your personal tastes, lifestyle, and dietary preferences. Weekly prepared meals, private chef services, and more.",
};

export default function MealPlansPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#111] py-28 text-center border-b border-[#2a2a2a]">
        <div className="container-luxury">
          <p className="section-heading">Personalized Dining</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Meal Plans</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-3xl text-center">
          <p className="text-[#aaa] text-base leading-relaxed mb-6">
            We invite you to inquire about our customized meal plans, exquisitely curated to reflect your personal
            tastes, lifestyle, and dietary preferences. Each offering is thoughtfully crafted with the finest
            ingredients and culinary artistry, delivering an indulgent dining experience tailored exclusively for you.
          </p>
          <p className="text-[#aaa] text-base leading-relaxed">
            From globally inspired flavors to refined, health-conscious options, every menu is tailored to deliver a
            unique and satisfying culinary experience. Whether you desire weekly prepared meals, private chef services,
            or specialized menus for wellness, fitness, or special occasions, our team ensures impeccable quality,
            presentation, and flavor in every bite. With attention to detail and a commitment to excellence, we
            transform everyday dining into a luxurious experience.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#111]">
        <div className="container-luxury max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/vecteezy_healthy-meal-prep-containers-with-gri.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true"
                alt="Healthy meal prep containers"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/vecteezy_p-down-view-of-weekly-meal-prep-conta.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true"
                alt="Weekly meal prep containers"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plan Types */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-5xl">
          <p className="section-heading text-center">Options</p>
          <h2 className="font-serif text-3xl text-white text-center mb-4">Our Meal Plan Services</h2>
          <div className="gold-divider mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weekly Prepared Meals",
                desc: "Freshly prepared weekly meal packages delivered with the same luxury and precision as our event catering.",
              },
              {
                title: "Private Chef Services",
                desc: "An exclusive private chef crafting bespoke meals in your home for daily dining or special occasions.",
              },
              {
                title: "Specialized Menus",
                desc: "Wellness, fitness, dietary-specific, and occasion menus designed with your health and lifestyle in mind.",
              },
            ].map((p) => (
              <div key={p.title} className="border border-[#2a2a2a] p-8 hover:border-[#c9a96e] transition-colors">
                <h3 className="font-serif text-xl text-white mb-3">{p.title}</h3>
                <div className="w-8 h-px bg-[#c9a96e] mb-4" />
                <p className="text-[#888] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111] text-center">
        <div className="container-luxury max-w-2xl">
          <h2 className="font-serif text-3xl text-white mb-6">Ready to Transform Your Dining?</h2>
          <Link href="/contact" className="btn-gold">
            Inquire About Meal Plans
          </Link>
        </div>
      </section>
    </>
  );
}
