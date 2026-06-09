import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Empanadas | Luxury Event Planning & Catering",
  description:
    "Exquisite empanada packages thoughtfully crafted to offer a refined and flavorful experience. Savory fillings including chicken, cheese, and gourmet flavors.",
};

export default function EmpanadasPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#111] py-28 text-center border-b border-[#2a2a2a]">
        <div className="container-luxury">
          <p className="section-heading">Artisan Offerings</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Empanadas</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://img1.wsimg.com/isteam/ip/7b1c7b35-a337-47dd-a52f-a1d6f6762414/vecteezy_homemade-vegetable-taco-a-gourmet-hea.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,cg:true"
                alt="Gourmet empanadas"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <p className="section-heading">Gourmet Selection</p>
              <h2 className="font-serif text-3xl text-white mb-4">Artisan Empanada Packages</h2>
              <div className="gold-divider mb-6" />
              <p className="text-[#aaa] text-sm leading-relaxed mb-8">
                Please ask about our exquisite empanada packages, thoughtfully crafted to offer a refined and
                flavorful experience. Choose from a selection of savory fillings, including delicately seasoned
                chicken, rich and creamy cheese, and an array of other gourmet flavors. Each empanada is prepared
                with premium ingredients and culinary precision, delivering a perfect balance of taste and
                sophistication in every bite.
              </p>
              <Link href="/contact" className="btn-gold">
                Inquire About Our Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fillings */}
      <section className="py-20 bg-[#111]">
        <div className="container-luxury max-w-4xl text-center">
          <p className="section-heading">Savory Options</p>
          <h2 className="font-serif text-3xl text-white mb-4">Available Fillings</h2>
          <div className="gold-divider mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Chicken", desc: "Delicately seasoned with aromatic herbs and spices" },
              { name: "Cheese", desc: "Rich and creamy with premium gourmet cheese selection" },
              { name: "Gourmet Flavors", desc: "An array of specialty fillings crafted to your preference" },
            ].map((f) => (
              <div key={f.name} className="border border-[#2a2a2a] p-6 hover:border-[#c9a96e] transition-colors">
                <h3 className="font-serif text-xl text-white mb-2">{f.name}</h3>
                <div className="w-8 h-px bg-[#c9a96e] mx-auto mb-4" />
                <p className="text-[#888] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
