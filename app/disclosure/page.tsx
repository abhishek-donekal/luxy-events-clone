import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosure | Luxury Event Planning & Catering",
  description: "Non-Refundable Payment Disclosure and cancellation policy for Luxury Event Planning & Catering.",
};

export default function DisclosurePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#111] py-28 text-center border-b border-[#2a2a2a]">
        <div className="container-luxury">
          <p className="section-heading">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Disclosure</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      {/* Disclosure Content */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container-luxury max-w-3xl">
          <article className="prose prose-invert max-w-none">
            <h2 className="font-serif text-3xl text-white mb-6">NON-REFUNDABLE PAYMENT DISCLOSURE</h2>
            <div className="w-16 h-px bg-[#c9a96e] mb-10" />

            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-xl text-[#c9a96e] mb-4">Non-Refundable Policy</h3>
                <p className="text-[#aaa] text-sm leading-relaxed">
                  All payments, including deposits, are non-refundable as per Florida Statute § 83.49. This law allows
                  non-refundable fees when they are clearly disclosed prior to payment. Payments secure our exclusive
                  services for your specific date, time, and location, preventing us from accepting other bookings.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#c9a96e] mb-4">Cancellation</h3>
                <p className="text-[#aaa] text-sm leading-relaxed">
                  Event cancellations after any payment has been made will result in forfeiture of the total amount
                  paid. By making a payment, you acknowledge that you have read and understood these Terms &amp;
                  Conditions.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#c9a96e] mb-4">Contact Us</h3>
                <p className="text-[#aaa] text-sm leading-relaxed">
                  If you have any questions regarding our payment policy, please contact us at{" "}
                  <a href="mailto:info@luxy-group.com" className="text-[#c9a96e] hover:underline">
                    info@luxy-group.com
                  </a>
                  .
                </p>
                <p className="text-[#aaa] text-sm leading-relaxed mt-4">
                  By making a payment, you acknowledge that you have read and understood these Terms &amp; Conditions.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
