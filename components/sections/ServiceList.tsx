'use client';

import { ServiceDetailCard } from '@/components/cards/ServiceDetailCard';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface ServiceListProps {
  services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              우리의 서비스
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              인핸스는 고객의 성공을 위한 다양한 기술 솔루션을 제공합니다.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {services.map((service) => (
            <ServiceDetailCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}