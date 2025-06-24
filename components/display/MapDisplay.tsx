'use client';

interface MapDisplayProps {
  latitude: number;
  longitude: number;
}

export function MapDisplay({ latitude, longitude }: MapDisplayProps) {
  // In a real application, you would integrate with a map service like Google Maps or OpenStreetMap.
  // For this example, we'll use a placeholder iframe or a simple div.
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=ko&z=16&output=embed`;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            오시는 길
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            인핸스 사무실의 위치를 지도에서 확인하세요.
          </p>
        </div>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="회사 위치"
          ></iframe>
        </div>
      </div>
    </section>
  );
}