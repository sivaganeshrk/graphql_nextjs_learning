'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Books', href: '/books' },
    { label: 'Authors', href: '/authors' },
  ];

  return (
    <nav className="bg-blue-900 px-6 py-4 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold text-white">📚 BookShelf</span>
        </Link>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  pathname === item.href
                    ? 'text-yellow-300'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
