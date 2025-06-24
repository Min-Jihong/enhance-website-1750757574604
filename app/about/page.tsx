'use client';

import { Header } from '@/components/layout/Header';
import { CompanyVision } from '@/components/sections/CompanyVision';
import { TeamSection } from '@/components/sections/TeamSection';
import { HistorySection } from '@/components/sections/HistorySection';
import { Footer } from '@/components/layout/Footer';
import { MobileSidebar } from '@/components/common/Sidebar';

export default function AboutUsPage() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const teamMembers = [
    { id: '1', name: '김철수', position: 'CEO', image: '/images/team/kim.jpg', socialLink: '#' },
    { id: '2', name: '이영희', position: 'CTO', image: '/images/team/lee.jpg', socialLink: '#' },
    { id: '3', name: '박민준', position: 'Lead Developer', image: '/images/team/park.jpg', socialLink: '#' }
  ];

  const historyEvents = [
    { year: '2020', description: '인핸스 설립 및 초기 서비스 런칭' },
    { year: '2022', description: '클라우드 솔루션 사업 확장' },
    { year: '2024', description: '글로벌 시장 진출 준비' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={navItems} />
      <div className="lg:hidden p-4">
        <MobileSidebar />
      </div>
      <main className="flex-1">
        <CompanyVision
          visionTitle="우리의 비전"
          visionDescription="기술을 통해 세상에 긍정적인 변화를 가져오고, 고객의 성공을 위한 최고의 파트너가 되는 것입니다."
          missionTitle="우리의 미션"
          missionDescription="혁신적인 솔루션과 탁월한 서비스로 고객의 비즈니스 가치를 극대화합니다."
        />
        <TeamSection teamMembers={teamMembers} />
        <HistorySection events={historyEvents} />
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