"use client";

import { useEffect, useRef } from "react";

const TALLY_SCRIPT_SRC = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

type TallyEmbedProps = {
  formId: string;
  title: string;
};

/**
 * Tally form embed with dynamic height. Tally's script reads `data-tally-src`,
 * sets the iframe `src` and resizes it to the form, so there's no inner
 * scrollbar. If the script can't load (ad blockers, some in-app browsers),
 * fall back to loading the iframe directly at its default height.
 */
export default function TallyEmbed({ formId, title }: TallyEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const embedSrc = `https://tally.so/embed/${formId}?alignLeft=1&transparentBackground=1&dynamicHeight=1`;

  useEffect(() => {
    const load = () => window.Tally?.loadEmbeds();
    const fallback = () => {
      const iframe = iframeRef.current;
      if (iframe && !iframe.src) iframe.src = embedSrc;
    };

    if (window.Tally) {
      load();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${TALLY_SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = TALLY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", load);
    script.addEventListener("error", fallback);
    return () => {
      script?.removeEventListener("load", load);
      script?.removeEventListener("error", fallback);
    };
  }, [embedSrc]);

  return (
    <iframe
      ref={iframeRef}
      data-tally-src={embedSrc}
      loading="lazy"
      width="100%"
      height={500}
      title={title}
      className="block w-full border-0"
    />
  );
}
