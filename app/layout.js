import "./globals.css";
import {
  Montserrat
} from 'next/font/google'

import Header from "@/components/header";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '500', '700', '900'],
  styles: ['italic', 'normal'],
  subsets: ["latin"]
})

export const metadata = {
  title: "Patitas Felices",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
