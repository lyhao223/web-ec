import React from "react";
import jeans from "../../../../../../assets/blogpost/jeans.jpg";
import parkingbunker from "../../../../../../assets/blogpost/parkingbunker.jpg";
import jeans2 from "../../../../../../assets/blogpost/jeans2.jpg";
import Link from "next/link";

const dummy = [
  {
    id: 1,
    image: jeans,
    date: "DEC 25, 2023",
    title: "The Perfect Guide To Pick Your Perfect Duffle for 2024!",
    content:
      "Summer is here, the season of road trips, redeyes, and getaways is upon us. Add in programming like your Tuesday cycling class and a duffle...",
  },
  {
    id: 2,
    image: parkingbunker,
    date: "DEC 25, 2023",
    title: "Products With Purpose: What is clean denim anyway?",
    content:
      "Denim’s a dirty business, but it doesn’t have to be. We sat down to talk all clean denim, inclusivity, and why sustainability can be both...",
  },
  {
    id: 3,
    image: jeans2,
    date: "DEC 25, 2023",
    title: "Gold Seal of Sustainability: GOTS, Finally Explained!",
    content:
      "You know by now that using sustainable materials in our products is right there with picking up trash, in terms of how it important it...",
  },
];
const Blogpost = () => {
  const [showFlyoutReadMore, setShowFlyoutReadMore] = React.useState(null);
  const handleMouseEnterReadMore = (id: any) => {
    setShowFlyoutReadMore(id);
  };
  const handleMouseLeaveReadMore = () => {
    setShowFlyoutReadMore(null);
  };
  return (
    <section id="blog" className="my-36">
      <h1 className="text-center font-medium subpixel-antialiased text-5xl">
        Our Latest Posts
      </h1>
      <div className="flex xl:flex-row flex-col items-center justify-center xl:space-x-36 space-y-20 xl:space-y-0 mt-16">
        {dummy.map((item) => (
          <div
            className="flex flex-col items-start justify-start space-y-4 w-96"
            key={item.id}>
            <img src={item.image.src} alt={item.title} className="w-96 h-96" />
            <p className="text-gray-400 font-normal antialiased tracking-widest">
              {item.date}
            </p>
            <h1 className="font-semibold text-wrap text-2xl tracking-wide">
              {item.title}
            </h1>
            <p className="leading-8">{item.content}</p>
            <Link href={`/blog/blogdetail/${item.id}`}>
              <button
                className="relative"
                onMouseEnter={() => handleMouseEnterReadMore(item.id)}
                onMouseLeave={handleMouseLeaveReadMore}>
                <p className="text-2xl font-medium">Read more</p>
                <span
                  style={{
                    transform:
                      showFlyoutReadMore === item.id
                        ? "scaleX(1)"
                        : "scaleX(0)",
                  }}
                  className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogpost;
