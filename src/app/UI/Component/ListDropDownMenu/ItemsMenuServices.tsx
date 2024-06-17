"use client";

export default function ItemMenuServices() {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Customer Care</h3>
        <a href="#" className="block text-sm hover:underline">
          Product Issues
        </a>
        <a href="#" className="block text-sm hover:underline">
          Payment issues
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Payment Instructions</h3>
        <a href="#" className="block text-sm hover:underline">
          With Credit Card
        </a>
        <a href="#" className="block text-sm hover:underline">
          With Paypal
        </a>
        <a href="#" className="block text-sm hover:underline">
          With Cash
        </a>
      </div>
    </div>
  );
}
