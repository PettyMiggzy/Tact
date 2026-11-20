import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
});
const mono = JetBrains_Mono({ variable: "--font-mono-hud", subsets: ["latin"] });

const description =
  "Superior Tactical Response is an Indiana contract security agency: armed and unarmed protection agents, 24/7 patrols and real-time incident mapping. BBB A+ rated.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thetacticalresponse.com"),
  title: {
    default: "Superior Tactical Response | Indiana Contract Security",
    template: "%s | Superior Tactical Response",
  },
  description,
  openGraph: {
    title: "Superior Tactical Response | Indiana Contract Security",
    description,
    siteName: "Superior Tactical Response L.L.C.",
    type: "website",
    images: [{ url: "/images/logo.png", width: 512, height: 512 }],
  },
};

export const viewport: Viewport = { themeColor: "#03060f" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
