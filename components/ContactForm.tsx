"use client";

import { useState } from "react";

interface ContactFormProps {
  showFileUpload?: boolean;
  submitLabel?: string;
}

export default function ContactForm({ showFileUpload = false, submitLabel = "Send Message" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="text-center py-8">
        <p className="text-[#c9a96e] text-sm tracking-widest uppercase mb-2">Message Sent</p>
        <p className="text-white">Thank you for reaching out. We will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg mx-auto">
      <div>
        <label className="block text-xs tracking-widest uppercase text-[#888] mb-1">
          Name <span className="text-[#c9a96e]">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full bg-[#1a1a1a] border border-[#3a3a3a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-[#888] mb-1">
          Email <span className="text-[#c9a96e]">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full bg-[#1a1a1a] border border-[#3a3a3a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
          placeholder="Your Email"
        />
      </div>
      {showFileUpload && (
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#888] mb-1">
            Attach Files
          </label>
          <input
            type="file"
            multiple
            className="w-full bg-[#1a1a1a] border border-[#3a3a3a] text-[#888] px-4 py-3 text-sm file:mr-4 file:py-1 file:px-4 file:border-0 file:text-xs file:bg-[#c9a96e] file:text-black cursor-pointer"
          />
        </div>
      )}
      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-gold-filled disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : submitLabel}
        </button>
        <button
          type="reset"
          className="btn-gold"
          onClick={() => setStatus("idle")}
        >
          Cancel
        </button>
      </div>
      <p className="text-[#555] text-xs mt-2">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="https://policies.google.com/privacy" className="underline hover:text-[#c9a96e]">Privacy Policy</a>{" "}
        and{" "}
        <a href="https://policies.google.com/terms" className="underline hover:text-[#c9a96e]">Terms of Service</a>{" "}
        apply.
      </p>
    </form>
  );
}
