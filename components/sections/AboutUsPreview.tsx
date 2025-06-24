'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AboutUsPreviewProps {
  title: string;
  description: string;
  linkText: string;
}

export function AboutUsPreview({ title, description, linkText }: AboutUsPreviewProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {description}
          </p>
          <Button asChild>
            <Link href="/about" prefetch={false}>
              {linkText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}