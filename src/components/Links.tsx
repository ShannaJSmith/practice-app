const links = [
  { label: "GitHub", href: "https://github.com/ShannaJSmith" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shanna-j-smith/" },
  { label: "Resume", href: "#" },
];

export default function Links() {
  return (
    <div className="mt-8 flex gap-4 flex-wrap justify-center">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          className="px-4 py-2 bg-white text-purple-700 font-semibold rounded hover:bg-purple-700 hover:text-white transition"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
