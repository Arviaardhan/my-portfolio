import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Import font
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Konfigurasi Font Body (Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body", // Variable CSS yang akan dipakai Tailwind
});

// Konfigurasi Font Display (Space Grotesk)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display", // Variable CSS yang akan dipakai Tailwind
});

// Pindahkan Metadata dari index.html ke sini
export const metadata: Metadata = {
  title: "Mobile Product Architect — Building Apps Brick by Brick",
  description: "Engineering high-performance mobile products with modular architecture.",
  openGraph: {
    title: "Mobile Product Architect",
    description: "Building Apps Brick by Brick",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Pasang variable font di class body */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}