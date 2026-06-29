// https://vike.dev/Head

import logoUrl from "../assets/logo.svg";

export function Head() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        history.scrollRestoration = 'manual';
        
        // Track scroll position en temps réel
        window.__scrollLog = [];
        window.addEventListener('scroll', () => {
          const entry = { t: Date.now(), y: window.scrollY };
          window.__scrollLog.push(entry);
          console.log('[scroll]', entry);
        }, { passive: true });

        // Log la position initiale dès que possible
        console.log('[initial scroll]', window.scrollY);
        document.addEventListener('DOMContentLoaded', () => {
          console.log('[DOMContentLoaded scroll]', window.scrollY);
        });
      `,
        }}
      />
    </>
  );
}
