import StickyHeader from '@/components/StickyHeader';
import Links from '@/components/Links';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-700 to-pink-500 text-white flex flex-col items-center justify-start p-8">
      {/* Sticky navigation at the top */}
      <StickyHeader />

      {/* Page content */}
      <div className="mt-24 w-full max-w-6xl">
        <Links />
        <About />
      </div>
    </main>
  );
}
