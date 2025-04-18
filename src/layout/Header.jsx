export default function Header() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 flex flex-col sm:flex-row justify-between p-4 sm:p-6 rounded-b-lg shadow-lg">
      <h1 className="font-bold text-3xl sm:text-[2.5rem] text-white drop-shadow-lg">
        Armitex
      </h1>
      <h1 className="text-xl sm:text-[1.5rem] text-white opacity-90 tracking-wide drop-shadow-md mt-4 sm:mt-0">
        Trade Crypto. Anytime. Anywhere
      </h1>
    </div>
  );
}
