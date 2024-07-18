import Link from "next/link";
import React from "react";
interface ReadMoreFlyProps {
  id: number | string;
  children: React.ReactNode;
}
const ReadMoreFly = ({ id, children }: ReadMoreFlyProps) => {
  const [showFlyoutReadMore, setShowFlyoutReadMore] = React.useState(null);
  const handleMouseEnterReadMore = (id: any) => {
    setShowFlyoutReadMore(id);
  };
  const handleMouseLeaveReadMore = () => {
    setShowFlyoutReadMore(null);
  };
  return (
    <Link href={`/blog/blogdetail/${id}`}>
      <button
        className="relative"
        onMouseEnter={() => handleMouseEnterReadMore(id)}
        onMouseLeave={handleMouseLeaveReadMore}>
        <p className="text-2xl font-medium">{children}</p>
        <span
          style={{
            transform: showFlyoutReadMore === id ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </button>
    </Link>
  );
};

export default ReadMoreFly;
