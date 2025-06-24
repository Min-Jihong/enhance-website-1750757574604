'use client';

import { Header } from '@/components/layout/Header';
import { ServiceList } from '@/components/sections/ServiceList';
import { CallToAction } from '@/components/sections/CallToAction';
import { Footer } from '@/components/layout/Footer';
import { MobileSidebar } from '@/components/common/Sidebar';

export default function ServicesPage() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const servicesData = [
    { id: '1', name: '웹 개발', description: '최신 기술을 활용한 반응형 웹사이트 개발', icon: 'code' },
    { id: '2', name: '모바일 앱 개발', description: 'iOS 및 Android 네이티브 앱 개발', icon: 'smartphone' },
    { id: '3', name: '클라우드 솔루션', description: '안정적이고 확장 가능한 클라우드 인프라 구축', icon: 'cloud' },
    { id: '4', name: '데이터 분석', description: '빅데이터를 활용한 인사이트 도출 및 비즈니스 전략 수립', icon: 'bar-chart' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={navItems} />
      <div className="lg:hidden p-4">
        <MobileSidebar />
      </div>
      <main className="flex-1">
        <ServiceList services={servicesData} />
        <CallToAction
          title="프로젝트를 시작할 준비가 되셨나요?"
          buttonText="지금 문의하기"
          link="/contact"
        />
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