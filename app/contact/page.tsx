import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Luxury Event Planning & Catering",
  description:
    "Have a question? Reach out to us! Contact Luxury Event Planning & Catering at (561) 816-8220 or info@luxy-group.com. Serving Miami, Broward, and Palm Beach.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#111] py-28 text-center border-b border-[#2a2a2a]">
        <div className="container-luxury">
          <p className="section-heading">Reach Out</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Info Panel */}
            <div>
              <p className="section-heading">Get In Touch</p>
              <h2 className="font-serif text-3xl text-white mb-4">Have a question? Reach out to us!</h2>
              <div className="gold-divider mb-8" />

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl text-white mb-2">Luxury Event Planning &amp; Catering</h3>
                  <p className="text-[#888] text-sm">Miami · Broward · Palm Beach</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-[#c9a96e] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#c9a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <a href="tel:5618168220" className="text-white hover:text-[#c9a96e] transition-colors">
                      (561) 816-8220
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-[#c9a96e] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#c9a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:info@luxy-group.com"
                      className="text-white hover:text-[#c9a96e] transition-colors"
                    >
                      info@luxy-group.com
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs tracking-widest uppercase text-[#888] mb-3">Connect With Us</h3>
                  <a
                    href="https://g.page/r/CX2wPRv7RkOuEAE/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#c9a96e] text-sm hover:underline"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Leave Us a Google Review
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm showFileUpload={false} submitLabel="Send" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
