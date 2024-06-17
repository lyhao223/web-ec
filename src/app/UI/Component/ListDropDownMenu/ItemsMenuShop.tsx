"use client";

export default function ItemMenuShop() {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Men</h3>
        <a href="#" className="block text-sm hover:underline">
          Shirt
        </a>
        <a href="#" className="block text-sm hover:underline">
          Jeans
        </a>
        <a href="#" className="block text-sm hover:underline">
          Shoes
        </a>
        <a href="#" className="block text-sm hover:underline">
          Sale for men
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Women</h3>
        <a href="#" className="block text-sm hover:underline">
          Shirt
        </a>
        <a href="#" className="block text-sm hover:underline">
          Jeans
        </a>
        <a href="#" className="block text-sm hover:underline">
          Shoes
        </a>
        <a href="#" className="block text-sm hover:underline">
          Sale for women
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Kids</h3>
        <a href="#" className="block text-sm hover:underline">
          Shirt
        </a>
        <a href="#" className="block text-sm hover:underline">
          Jeans
        </a>
        <a href="#" className="block text-sm hover:underline">
          Shoes
        </a>
        <a href="#" className="block text-sm hover:underline">
          Sale for kids
        </a>
      </div>
    </div>
  );
}
