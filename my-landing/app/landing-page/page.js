'use client';

import { useSearchParams } from 'next/navigation';

const LandingPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '';
  const description = searchParams.get('description') || '';
  const backgroundColor = searchParams.get('backgroundColor') || '#ffffff';
  const textColor = searchParams.get('textColor') || '#000000';

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg sm:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default LandingPage;
