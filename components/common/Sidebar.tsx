'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Building, Briefcase, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About Us', path: '/about', icon: Building },
  { name: 'Services', path: '/services', icon: Briefcase },
  { name: 'Contact', path: '/contact', icon: Mail }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex flex-col h-screen w-64 border-r bg-gray-50 p-4">
      <div className="flex items-center justify-center h-16 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Enhance</h1>
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-lg py-6",
                  pathname === item.path ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b">
            <h1 className="text-2xl font-bold text-gray-800">Enhance</h1>
          </div>
          <ScrollArea className="flex-1 py-4">
            <nav className="space-y-2 px-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.path} passHref>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-lg py-6",
                      pathname === item.path ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon className="mr-3 h-6 w-6" />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}