"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] border-t border-[#2a2a2a] p-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-white text-sm font-medium mb-1">This website uses cookies.</p>
          <p className="text-[#888] text-xs leading-relaxed">
            We use cookies to analyze website traffic and optimize your website experience. By accepting our use of
            cookies, your data will be aggregated with all other user data.
          </p>
        </div>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-[#c9a96e] text-black text-xs tracking-widest uppercase px-6 py-2 hover:bg-[#dfc28c] transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
