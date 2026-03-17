import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeChef — Save Any Recipe From Social Media",
  description:
    "See a recipe on TikTok or Instagram? Share the link. WeChef extracts ingredients, steps, and timing using AI. Your personal cookbook, built from the videos you love.",
  openGraph: {
    title: "WeChef — Save Any Recipe From Social Media",
    description: "Share a link. Get the full recipe. Cook it tonight.",
    type: "website",
    url: "https://wechef.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
