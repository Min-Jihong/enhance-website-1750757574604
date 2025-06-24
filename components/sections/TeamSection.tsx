'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  socialLink: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              우리의 팀
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              인핸스의 성공을 이끄는 열정적인 전문가들입니다.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {teamMembers.map((member) => (
            <Card key={member.id} className="flex flex-col items-center p-6 text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                <CardDescription className="text-gray-500">{member.position}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                {member.socialLink && (
                  <Link href={member.socialLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    <Linkedin className="h-6 w-6 mx-auto" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}