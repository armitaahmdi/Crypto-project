import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 flex flex-col sm:flex-row justify-center items-center rounded-t-lg px-4 sm:px-6 py-6">
      <h1 className="text-white text-lg sm:text-xl flex items-center font-medium drop-shadow-lg text-center sm:text-left">
        Armitex, Developed with love
        <span className="ml-2 text-red-500 text-xl sm:text-2xl">
          <FaHeart />
        </span>
      </h1>
    </div>
  );
}
