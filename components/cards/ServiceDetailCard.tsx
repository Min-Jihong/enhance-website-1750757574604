'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Cloud, BarChart } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface ServiceDetailCardProps {
  service: Service;
}

const IconMap: { [key: string]: React.ElementType } = {
  code: Code,
  smartphone: Smartphone,
  cloud: Cloud,
  'bar-chart': BarChart
};

export function ServiceDetailCard({ service }: ServiceDetailCardProps) {
  const IconComponent = IconMap[service.icon];

  return (
    <Card id={service.id} className="flex flex-col p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <CardHeader className="pb-4">
        {IconComponent && <IconComponent className="h-12 w-12 text-blue-600 mb-4" />}
        <CardTitle className="text-2xl font-semibold">{service.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-500 text-lg">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}