'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactInfoProps {
  address: string;
  phone: string;
  email: string;
}

export function ContactInfo({ address, phone, email }: ContactInfoProps) {
  return (
    <div className="space-y-4 text-gray-700">
      <div className="flex items-center gap-3">
        <MapPin className="h-6 w-6 text-blue-600" />
        <p className="text-lg">{address}</p>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="h-6 w-6 text-blue-600" />
        <p className="text-lg">{phone}</p>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="h-6 w-6 text-blue-600" />
        <p className="text-lg">{email}</p>
      </div>
    </div>
  );
}