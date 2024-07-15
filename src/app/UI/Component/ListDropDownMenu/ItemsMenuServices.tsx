"use client";

import Link from "next/link";

export default function ItemMenuServices() {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <Link href="/service/aboutus" className="block text-sm hover:underline">
          About us
        </Link>
        <Link
          href="/service/shipandreturn"
          className="block text-sm hover:underline">
          Shipping & Returns
        </Link>
      </div>
      <div className="mb-6 space-y-3">
        <Link href="/service/faq" className="block text-sm hover:underline">
          Help & FAQs
        </Link>
      </div>
    </div>
  );
}
