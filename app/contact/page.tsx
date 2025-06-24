'use client';

import { Header } from '@/components/layout/Header';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactInfo } from '@/components/info/ContactInfo';
import { MapDisplay } from '@/components/display/MapDisplay';
import { Footer } from '@/components/layout/Footer';
import { MobileSidebar } from '@/components/common/Sidebar';
import { toast } from 'sonner';

export default function ContactPage() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleFormSubmit = (data: { senderName: string; senderEmail: string; subject: string; message: string }) => {
    console.log('Contact form submitted:', data);
    toast.success('문의가 성공적으로 접수되었습니다!');
    // Here you would typically send the data to an API
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={navItems} />
      <div className="lg:hidden p-4">
        <MobileSidebar />
      </div>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">문의하기</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                궁금한 점이 있으시면 언제든지 문의해주세요. 최대한 빠르게 답변드리겠습니다.
              </p>
              <ContactInfo
                address="서울특별시 강남구 테헤란로 123, 인핸스 빌딩"
                phone="+82 2-1234-5678"
                email="contact@enhance.com"
              />
            </div>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </section>
        <MapDisplay latitude={37.5037} longitude={127.0448} />
      </main>
      <Footer
        companyName="Enhance"
        copyrightYear="2024"
        socialLinks={[
          { name: 'Facebook', href: '#', icon: 'facebook' },
          { name: 'Twitter', href: '#', icon: 'twitter' },
          { name: 'LinkedIn', href: '#', icon: 'linkedin' }
        ]}
      />
    </div>
  );
}