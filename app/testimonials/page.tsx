import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Luxury Event Planning & Catering",
  description:
    "Read reviews from our clients and share your own experience with Luxury Event Planning & Catering. Your feedback helps us deliver exceptional service.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#111] py-28 text-center border-b border-[#2a2a2a]">
        <div className="container-luxury">
          <p className="section-heading">Client Experiences</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Testimonials</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-20 bg-[#0d0d0d] text-center">
        <div className="container-luxury max-w-2xl">
          <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border border-[#c9a96e]">
            <svg className="w-8 h-8 text-[#c9a96e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-white mb-4">Share Your Experience</h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-[#aaa] text-base leading-relaxed mb-10">
            Please leave your review here and share your experience with us. Your feedback is greatly valued and helps
            us continue to deliver exceptional service &amp; unforgettable moments !
          </p>
          <a
            href="https://g.page/r/CX2wPRv7RkOuEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Click Here To Post Review
          </a>
        </div>
      </section>
    </>
  );
}
