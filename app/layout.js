export const metadata = {
  title: "FurGone | Reusable Pet Hair Remover",
  description:
    "FurGone is a reusable pet hair remover designed for couches, carpets, furniture, and car seats. Launching soon on Amazon.",
  verification: {
    google: "JWX0PmDGTcEXDgOUxS-OaIs_dE8AI-KeMvqBbXax5M8" // ← paste your code here
  },
  keywords: [
    "FurGone",
    "pet hair remover",
    "reusable pet hair remover",
    "dog hair remover",
    "cat hair remover",
    "pet hair cleaner",
    "lint roller alternative",
  ],
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
