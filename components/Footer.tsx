import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2a2a2a] py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[#888] text-xs tracking-widest mb-4">
          Copyright &copy; 2026 Luxury Event Planning &amp; Catering - All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 text-xs text-[#666]">
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c9a96e] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c9a96e] transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
