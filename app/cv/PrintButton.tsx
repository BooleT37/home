"use client";

import { FaRegSave } from "react-icons/fa";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-medium shadow-lg hover:bg-zinc-700 transition-colors print:hidden"
    >
      <FaRegSave />
      Download pdf
    </button>
  );
}
