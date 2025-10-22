import Header from "./Header";

export default function StickyHeader() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-600/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Name Component */}
        <Header />

        {/* Navigation Links */}
        <ul className="hidden sm:flex space-x-6 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-gray-900 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-900 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-900 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
