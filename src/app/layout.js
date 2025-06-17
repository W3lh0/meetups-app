// src/app/layout.js
// This is the global Root Layout for the Next.js App Router project.
// It wraps the entire application and defines its basic structures (html, body).
// The original Pages Router equivalent functionality was from pages/_app.js and pages/_document.js.

import MainLayout from "@/components/layout/MainLayout";
import { UseProvider } from "@auth0/nextjs-auth0";
import "./globals.css";

export const metadata = {
  title: 'Nextjs Meetups',
  description: 'Browse a huge list of highly active NextJS meetups!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
