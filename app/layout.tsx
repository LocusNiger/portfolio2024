import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Iván's Portfolio",
  description: "Modern & Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Portfolio de Iván, un portafolio moderno y minimalista que muestra mis proyectos y habilidades."
        />
        <meta
          name="keywords"
          content="Iván, portafolio, desarrollador, proyectos, minimalista"
        />
        <meta name="author" content="Iván" />
        <title>Iván&apos;s Portfolio - Frontend Developer</title>

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Iván's Portfolio - Frontend Developer"
        />
        <meta
          property="og:description"
          content="Explore my projects and skills in this portfolio. Don't hesitate to contact me if you have a project in mind!"
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4D03AQH91AJRsM19_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671062952166?e=1738800000&v=beta&t=YVAZ8nXGYH3aiPmQTwTOjwh3o3j5uyKGrgcbgJyx_Bc"
        />
        <meta property="og:url" content="https://ivansanchez.vercel.app/" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Iván",
              "jobTitle": "Frontend Developer",
              "url": "https://ivansanchez.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/ivansanchez-frontend/",
                "https://github.com/locusniger"
              ]
            }
          `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
