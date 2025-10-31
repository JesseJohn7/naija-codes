import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Naija Quick Codes",
  description: "Quick USSD codes for Networks & Banks (MTN, Airtel, Glo, 9mobile & top banks).",
  icons: { icon: "/images/access.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
