import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WapDialer - Chat on WhatsApp Without Saving Numbers",
  description:
    "WapDialer is a simple, fast, and secure PWA that lets you message anyone on WhatsApp without the hassle of saving their number. Just enter the phone number, hit Chat, and you're instantly redirected to the WhatsApp chat window Perfect for quick one-time messages, business inquiries, or anyone who values a clutter-free contact list. Try it now - no installs, no fuss.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#21c063" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster
          toastOptions={{
            className: "",
            style: {
              background: "#fff",
              color: "#363636",
              borderRadius: "108px",
            },
          }}
        />
      </body>
    </html>
  );
}
