'use client';

import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsPreview } from '@/components/sections/AboutUsPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { Footer } from '@/components/layout/Footer';
import { MobileSidebar } from '@/components/common/Sidebar';

export default function HomePage() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const servicesData = [
    { id: '1', name: '웹 개발', description: '최신 기술을 활용한 반응형 웹사이트 개발', icon: 'code' },
    { id: '2', name: '모바일 앱 개발', description: 'iOS 및 Android 네이티브 앱 개발', icon: 'smartphone' },
    { id: '3', name: '클라우드 솔루션', description: '안정적이고 확장 가능한 클라우드 인프라 구축', icon: 'cloud' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={navItems} />
      <div className="lg:hidden p-4">
        <MobileSidebar />
      </div>
      <main className="flex-1">
        <HeroSection
          title="인핸스: 혁신을 위한 기술 파트너"
          subtitle="최고의 기술력으로 당신의 비즈니스를 한 단계 더 발전시킵니다."
          buttonText="자세히 알아보기"
        />
        <AboutUsPreview
          title="우리는 누구인가요?"
          description="인핸스는 혁신적인 기술 솔루션을 제공하여 고객의 비즈니스 성장을 돕는 데 전념하는 선도적인 기술 회사입니다."
          linkText="회사 소개 보기"
        />
        <ServicesPreview
          title="우리의 주요 서비스"
          services={servicesData}
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