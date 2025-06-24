'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  title: string;
  buttonText: string;
  link: string;
}

export function CallToAction({ title, buttonText, link }: CallToActionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href={link} prefetch={false}>
              {buttonText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}