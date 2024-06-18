import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <div className="fixed w-full p-10 bg-slate-700 h-36">
      <div className="flex flex-row items-center justify-center group">
        <input
          type="input"
          placeholder="Search..."
          className="w-[40rem] p-4 rounded-l-full outline-none"
        />
        <div className="rounded-r-full bg-black p-4 w-24">
          <button className="text-white">
            <FaSearch className="md:ml-4 ml-1" />
          </button>
        </div>
      </div>
      <div className="absolute top-2 right-4 p-6 rounded-full bg-black"></div>
    </div>
  );
}
