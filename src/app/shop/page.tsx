"use client";

export default function Home() {
  return (
    <section className="relative z-10 p-36">
      <div className="flex flex-row items-center justify-items-stretch space-x-40">
        <div className="flex flex-row items-center justify-between space-x-96">
          <p className="text-4xl tracking-tight subpixel-antialiased text-black leading-3">
            SHOPPING
          </p>
          <select
            name="choose"
            id="choose"
            className="border-2 border-black p-2 text-lg">
            <option value="1">All Items</option>
            <option value="2">Price: High to Low</option>
            <option value="3">Price: Low to High</option>
          </select>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-4xl leading-4 subpixel-antialiased tracking-tight">
            Category
          </p>
        </div>
      </div>
    </section>
  );
}
