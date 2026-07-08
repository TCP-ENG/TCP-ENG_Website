import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://tcp-eng.com"),
  title: {
    default: "TCP ENG | Engineering Reliable Embedded Solutions",
    template: "%s | TCP ENG",
  },
  description:
    "Travis Priest — embedded systems, firmware, and PCB design consultant. Custom embedded systems, firmware development, and PCB design from concept to production.",
  keywords: [
    "Embedded systems engineer",
    "Firmware engineer",
    "PCB design consultant",
    "Electrical engineering consultant",
    "STM32 firmware developer",
    "ESP32 firmware developer",
    "IoT product development",
    "LoRa embedded systems",
    "Hardware bring-up engineer",
    "Embedded consultant Florida",
    "Freelance firmware engineer",
  ],
  authors: [{ name: site.owner }],
  openGraph: {
    title: "TCP ENG | Engineering Reliable Embedded Solutions",
    description: site.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
