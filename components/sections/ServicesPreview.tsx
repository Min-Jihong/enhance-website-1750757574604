'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Cloud, BarChart } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface ServicesPreviewProps {
  title: string;
  services: Service[];
}

const IconMap: { [key: string]: React.ElementType } = {
  code: Code,
  smartphone: Smartphone,
  cloud: Cloud,
  'bar-chart': BarChart
};

export function ServicesPreview({ title, services }: ServicesPreviewProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              인핸스가 제공하는 주요 서비스들을 살펴보세요.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {services.map((service) => {
            const IconComponent = IconMap[service.icon];
            return (
              <Link key={service.id} href={`/services#${service.id}`} className="group" prefetch={false}>
                <Card className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                  <CardHeader className="pb-4">
                    {IconComponent && <IconComponent className="h-12 w-12 text-blue-600 mb-4" />}
                    <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-500">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}