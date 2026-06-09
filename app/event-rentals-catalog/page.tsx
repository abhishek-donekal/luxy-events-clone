import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Rentals Catalog | Luxury Event Planning & Catering",
  description:
    "Browse our Event Rentals Catalog. Download the PDF to see our full selection of luxury event rental items available for your event.",
};

export default function EventRentalsCatalogPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#111] py-28 text-center border-b border-[#2a2a2a]">
        <div className="container-luxury">
          <p className="section-heading">Browse Our Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Event Rentals Catalog</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-20 bg-[#0d0d0d] text-center">
        <div className="container-luxury max-w-2xl">
          <p className="text-[#aaa] text-base leading-relaxed mb-12">
            Explore our curated selection of luxury event rental items. From elegant tableware to stunning décor, our
            catalog offers everything you need to transform your event into an extraordinary experience.
          </p>

          <div className="border border-[#2a2a2a] p-12 mb-10 hover:border-[#c9a96e] transition-colors">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#c9a96e]">
              <svg className="w-8 h-8 text-[#c9a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-white mb-4">Download Our Full Catalog</h2>
            <p className="text-[#888] text-sm mb-8">
              Click below to download the complete Event Rentals Catalog PDF with all available items, descriptions,
              and pricing.
            </p>
            <a
              href="https://img1.wsimg.com/blobby/go/7b1c7b35-a337-47dd-a52f-a1d6f6762414/Event%20Rentals%20Catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-filled"
            >
              Download PDF
            </a>
          </div>

          <p className="text-[#666] text-xs">
            For custom rental inquiries or to check availability, please{" "}
            <a href="/contact" className="text-[#c9a96e] hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
