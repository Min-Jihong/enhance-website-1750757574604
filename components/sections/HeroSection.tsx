'use client';

import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export function HeroSection({ title, subtitle, buttonText }: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            {title}
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            {subtitle}
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              href="/about"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}