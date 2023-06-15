import Link from "next/link";
const MobileMenu = ({ handleClick, isOpen }) => {
  return (
    <div className="flex lg:hidden">
      <div className="flex justify-end items-end p-4 w-full">
        <button
          onClick={handleClick}
          className="relative w-8 h-8 z-40"
          aria-label="Mobile Menu button"
        >
          <span
            className={`block w-full h-0.5 absolute transform transition-transform duration-500 ${
              isOpen ? "rotate-45 bg-white" : "bg-white -translate-y-2"
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 absolute transform transition-transform duration-500 ${
              isOpen
                ? "rotate-45 bg-white -translate-y-1/2"
                : "bg-white translate-y-1/2"
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 absolute transform transition-transform duration-500 ${
              isOpen ? "-rotate-45 bg-white" : "bg-white translate-y-2"
            }`}
          ></span>
        </button>
      </div>
      {isOpen && (
        <>
          <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 cursor-pointer bg-black bg-opacity-90 z-10"></div>
          <nav className="fixed inset-0 flex items-center justify-center z-30">
            <ul className="list-none p-0 space-y-4 text-center text-2xl">
              <li className="py-2">
                <Link href="/" className="text-white uppercase">
                  Work
                </Link>
              </li>
              <li className="py-2">
                <Link href="/about" className="text-white uppercase">
                  Connect
                </Link>
              </li>
              <li className="py-2">
                <Link href="/contact" className=" text-white uppercase">
                  Twitter
                </Link>
              </li>
              <li className="py-2">
                <Link href="/contact" className="text-white uppercase">
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
