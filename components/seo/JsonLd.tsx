/**
 * Server-rendered JSON-LD for crawlers (no client JS required).
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD standard pattern
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
