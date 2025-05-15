import type React from "react";
import type { Metadata } from "next";
import { FavoritesProvider } from "@/context/favorites-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "./globals.css";

import RegisterSWScript from "./register-sw-script";

export const metadata: Metadata = {
  title: "Super Mondays - Dine More, Spend Less",
  description: "Restaurant promotional platform for exclusive deals",
  generator: "v0.dev",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.svg", sizes: "72x72", type: "image/svg" },
      { url: "/_logo.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/logo.svg", sizes: "57x57", type: "image/svg" },
      { url: "/_logo.png", sizes: "60x60", type: "image/png" },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <FavoritesProvider>
            <div className="">{children}</div>
            <RegisterSWScript />
            <ToastContainer autoClose={3000} />
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { AuthProvider } from "@/context/auth-context";
