'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

interface FooterProps {
  companyName: string;
  copyrightYear: string;
  socialLinks: SocialLink[];
}

const SocialIconMap: { [key: string]: React.ElementType } = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin
};

export function Footer({ companyName, copyrightYear, socialLinks }: FooterProps) {
  return (
    <footer className="w-full py-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm">&copy; {copyrightYear} {companyName}. All rights reserved.</p>
        <nav className="flex gap-4">
          {socialLinks.map((link) => {
            const IconComponent = SocialIconMap[link.icon];
            return (
              <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                {IconComponent && <IconComponent className="h-6 w-6" />}
                <span className="sr-only">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}