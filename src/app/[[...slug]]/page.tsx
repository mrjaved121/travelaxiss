import ClientAppWrapper from './ClientAppWrapper';

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['work-visa'] },
    { slug: ['europe-work-permit'] },
    { slug: ['privacy-policy'] },
    { slug: ['terms-conditions'] },
    { slug: ['disclaimer'] },
  ];
}

export default function CatchAllPage() {
  return <ClientAppWrapper />;
}
