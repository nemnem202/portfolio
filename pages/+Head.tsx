// https://vike.dev/Head

import logoUrl from "../assets/logo.svg";

export function Head() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap"
        media="print"
        onLoad={(e: React.SyntheticEvent<HTMLLinkElement, Event>) => {
          e.currentTarget.media = "all";
        }}
      />
    </>
  );
}
