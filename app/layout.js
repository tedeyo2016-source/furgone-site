export const metadata = {
  title: "FurGone",
  description: "FurGone coming soon website",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
