import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeProvider";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black`} >
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}