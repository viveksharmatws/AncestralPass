import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeProvider";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://cdn.tailwindcss.com"></Script>
      <body className="bg-white dark:bg-black">
        <Header />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
