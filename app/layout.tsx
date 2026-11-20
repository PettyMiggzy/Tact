import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

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

export const viewport: Viewport = { themeColor: "#060c20" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
