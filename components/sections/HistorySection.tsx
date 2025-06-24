'use client';

interface HistoryEvent {
  year: string;
  description: string;
}

interface HistorySectionProps {
  events: HistoryEvent[];
}

export function HistorySection({ events }: HistorySectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              우리의 연혁
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              인핸스의 주요 이정표와 성과를 확인하세요.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex items-start gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {event.year}
                </div>
                {index < events.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-300 my-2"></div>
                )}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-lg font-medium">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}