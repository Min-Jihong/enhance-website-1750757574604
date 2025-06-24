'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MobileSidebar } from '@/components/common/Sidebar';

interface HeaderProps {
  navItems: { name: string; href: string }[];
}

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl" prefetch={false}>
          Enhance
        </Link>
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="lg:hidden">
          <MobileSidebar />
        </div>
      </div>
    </header>
  );
}