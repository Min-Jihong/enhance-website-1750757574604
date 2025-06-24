'use client';

interface CompanyVisionProps {
  visionTitle: string;
  visionDescription: string;
  missionTitle: string;
  missionDescription: string;
}

export function CompanyVision({ visionTitle, visionDescription, missionTitle, missionDescription }: CompanyVisionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {visionTitle}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {visionDescription}
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {missionTitle}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {missionDescription}
          </p>
        </div>
      </div>
    </section>
  );
}